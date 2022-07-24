import React from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../../constants/theme'

export type WindowActionsProps = {
  onClickShortcat?: () => void
  onClickFullscreen?: () => void
  onClickExit?: () => void
}

const WindowActionGroup = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: row;
`

export type WindowActionProps = {
  hightlightColor: string
}

const WindowAction = styled.div<WindowActionProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${baseTheme.colors.white};
  box-sizing: border-box;
  margin-right: 8px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.hightlightColor};
  }
`

export const WindowActions: React.FC<WindowActionsProps> = ({
  onClickExit,
  onClickFullscreen,
  onClickShortcat,
}) => {
  return (
    <WindowActionGroup>
      {onClickExit && <WindowAction hightlightColor={baseTheme.colors.red} onClick={onClickExit}></WindowAction>}
      {onClickFullscreen && <WindowAction hightlightColor={baseTheme.colors.purple} onClick={onClickFullscreen}></WindowAction>}
      {onClickShortcat && <WindowAction hightlightColor={baseTheme.colors.yellow} onClick={onClickShortcat}></WindowAction>}
    </WindowActionGroup>
  )
}
