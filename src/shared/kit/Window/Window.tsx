import React, { useRef, useState } from 'react'
import { DraggableCore } from 'react-draggable'
import { Resizable } from 'react-resizable'
import styled from 'styled-components'
import { baseTheme } from '../../../constants/theme'
import { WindowActions, WindowActionsProps } from './WindowActions'
import './window.css'
import { WINDOW_CONSTRAINS_MIN } from '../../../constants/window'

// eslint-disable-next-line @typescript-eslint/ban-types
type WindowProps = {
  children: React.ReactNode
  title?: string
  defaultSize?: {
    width: number
    height: number
  }
}

type WindowWrapperProps = {
  width: number
  height: number
  x: number
  y: number
}

const WindowWrapper = styled.div<WindowWrapperProps>`
  border: 8px solid ${baseTheme.colors.black};
  border-top: 0px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: white;
  box-shadow: 8px 8px 0px 0px #000d;
  display: flex;
  flex-direction: column;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  position: absolute;
`
const WindowHeader = styled.div`
  background-color: ${baseTheme.colors.black};
  padding: 8px 0;
  align-items: center;
  position: relative;
  cursor: pointer;
`
const WindowTitle = styled.h3`
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  font-family: 'IBM Plex Mono';
  color: white;
`

const WindowBody = styled.div`
  overflow: auto;
  height: 100%;
`

export const Window: React.FC<WindowProps & WindowActionsProps> = ({
  children,
  title = 'Title',
  defaultSize,
  ...headerProps
}) => {
  const windowRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(defaultSize ?? { width: 300, height: 300 })
  const [position, setPosition] = useState({ x: 300, y: 300 })
  const [{ deltaX, deltaY }, setDelta] = useState({ deltaX: 0, deltaY: 0 })
  return (
    <DraggableCore
      onStart={(e, { x, y }) => setDelta({ deltaX: x - position.x, deltaY: y - position.y })}
      onDrag={(e, data) => setPosition({ x: data.x - deltaX, y: data.y - deltaY })}
      handle='.wnd-header'
    >
      <Resizable
        onResize={(ev, { size }) => setSize(size)}
        className='wnd-resizable'
        {...size}
        minConstraints={WINDOW_CONSTRAINS_MIN}
        maxConstraints={[window.innerWidth, window.innerHeight]}
        axis={'both'}
        resizeHandles={['e', 's']}
        handle={(handleAxis, ref) => <div ref={ref} className={`wnd-handle-${handleAxis}`}></div>}
      >
        <WindowWrapper data-testid="wrapper" ref={windowRef} {...position} {...size}>
          <WindowHeader className='wnd-header'>
            <WindowActions {...headerProps}></WindowActions>
            <WindowTitle>{title}</WindowTitle>
          </WindowHeader>
          <WindowBody>{children}</WindowBody>
        </WindowWrapper>
      </Resizable>
    </DraggableCore>
  )
}
