import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../constants/theme'
import { Text } from '../kit/Typography'

export type Application = {
  name: string
  icon: string
  render: (application: Application, close: () => void) => ReactElement
}

type Props = {
  applications: Application[]
  onClick: (application: Application) => void
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
    border: 1px double ${baseTheme.colors.white}
  }
`
const AppIcon = styled.img`
  width: 48px;
  height: 48px;
`

type AppProps = {
  application: Application
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

export const Desktop: FC<Props> = ({ applications, onClick }) => {
  return (
    <DesktopWrapper>
      {applications.map((app) => (
        <App key={app.name} application={app} onClick={() => onClick(app)} />
      ))}
    </DesktopWrapper>
  )
}
