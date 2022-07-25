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
  height: 64px;
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
const AppIcon = styled.img`
  width: 48px;
  height: 48px;
`

type AppProps = {
  application: IStartProcess
  onClick(): void
}

const App: FC<AppProps> = ({ application, onClick }) => {
  return (
    <AppWrapper onDoubleClick={onClick}>
      <AppIcon src={application.icon} />
      <Text align='center'>{application.name}</Text>
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
