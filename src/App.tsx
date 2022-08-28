import { Desktop } from './shared/Desktop/Desktop'
import { LoginScreen } from './shared/LoginScreen'
import Explorer from './shared/Explorer'
import { APPS } from './constants/applications'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectSystemInfo } from './store/system/systemSlice'
import { sendStatistics } from './utils/statisitic'

type AppWrapperProps = {
  background: string
}

const AppWrapper = styled.div<AppWrapperProps>`
  text-align: center;
  background: url(${(props) => props.background});
  background-color: #bd00ff;
  background-size: cover;
  height: 100vh;
`


sendStatistics();
function App() {
  const info = useSelector(selectSystemInfo)
  return (
    <LoginScreen>
      <AppWrapper background={info.background}>
        <Desktop applications={APPS} />
        <Explorer />
      </AppWrapper>
    </LoginScreen>
  )
}

export default App
