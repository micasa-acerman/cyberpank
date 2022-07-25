import './App.css'
import { Desktop } from './shared/Desktop/Desktop'
import { LoginScreen } from './shared/LoginScreen'
import Explorer from './shared/Explorer'
import { APPS } from './constants/applications'



function App() {
  return (
    <LoginScreen>
      <div className='App' style={{ position: 'relative' }}>
        <Desktop applications={APPS} />
        <Explorer />
      </div>
    </LoginScreen>
  )
}

export default App
