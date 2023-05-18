import { FC } from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../constants/theme'
import { IStartProcess } from '../../models/Process'
import { useAppDispatch } from '../../store'
import { addProcess } from '../../store/process/processSlice'
import { Text } from '../kit/Typography'

type Props = {
  applications: IStartProcess[]
}

const DesktopWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const AppWrapper = styled.li`
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  cursor: pointer;
  box-sizing: border-box;
  :checked {
    border: 1px double ${baseTheme.colors.white};
  }
`
const AppIconCustom = styled.img`
  width: 48px;
  height: 48px;
`

const AppIcon = styled.span`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe69d;
  border-radius: 10px;
  image-rendering: pixelated;
  margin-bottom: 4px;
  border: 2px solid black;
`

type AppProps = {
  application: IStartProcess
  onClick(): void
}

const App: FC<AppProps> = ({ application, onClick }) => {
  return (
    <AppWrapper onDoubleClick={onClick}>
      {typeof application.icon === 'string' ? <AppIconCustom src={application.icon} /> : <AppIcon><application.icon enableBackground='black' size='24px' color='black' /></AppIcon>}
      <Text align='center' noSelection>{application.name}</Text>
    </AppWrapper>
  )
}

export const Desktop: FC<Props> = ({ applications }) => {
  const dispatch = useAppDispatch()
  const handleClick = (processInfo: IStartProcess) => {
    dispatch(addProcess(processInfo))
  }
  return (
    <DesktopWrapper>
      {applications.map((app) => (
        <App key={app.name} application={app} onClick={() => handleClick(app)} />
      ))}
    </DesktopWrapper>
  )
}
