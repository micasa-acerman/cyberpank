import { Desktop } from './shared/Desktop/Desktop'
import { LoginScreen } from './shared/LoginScreen'
import Explorer from './shared/Explorer'
import { APPS } from './constants/applications'
import styled from 'styled-components'

const AppWrapper = styled.div`
  text-align: center;
  background: url('https://i.gifer.com/ZIb4.gif');
  background-color: #bd00ff;
  background-size: cover;
  height: 100vh;
`

function App() {
  return (
    <LoginScreen>
      <AppWrapper>
        <Desktop applications={APPS} />
        <Explorer />
      </AppWrapper>
    </LoginScreen>
  )
}

export default App
