import { FC, ReactElement, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useAppDispatch } from '../../store'
import { login, selectUserInfo } from '../../store/user/userSlice'
import { Button } from '../kit/Button'
import TextField from "../kit/TextField"
import { H3 } from '../kit/Typography'

type LoginScreenProps = {
  children: ReactElement
}

type ScreenWrapperProps = {
  hide: boolean
}

const ScreenWrapper = styled.div<ScreenWrapperProps>`
  position: absolute;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  top: ${(props) => (props.hide ? '-100vh' : 0)};
  left: 0;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: top 1s ease;
`

const LoginForm = styled.div`
  width: 300px;
  > *:not(:last-child) {
    margin-bottom: 12px;
  }
  > * {
    width: 100%;
  }
`

export const LoginScreen: FC<LoginScreenProps> = ({ children }) => {
  const userInfo = useSelector(selectUserInfo)
  const dispatch = useAppDispatch()
  const [name, setName] = useState<string>('')
  const handleLogin = () => {
    dispatch(login(name))
  }
  return (
    <>
      <ScreenWrapper hide={userInfo.isAuthorizated}>
        <LoginForm>
          <H3>Добро пожаловать в SGA OS</H3>
          <TextField
            placeholder='Ваш никнейм'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          ></TextField>
          <Button variant='primary' onClick={handleLogin}>
            Войти
          </Button>
        </LoginForm>
      </ScreenWrapper>
      {userInfo.isAuthorizated && children}
    </>
  )
}
