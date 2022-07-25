import { useState } from 'react'
import './App.css'
import { Application, Desktop } from './shared/Desktop/Desktop'
import Window from './shared/kit/Window'
import Folder from './images/folder.png'
import styled from 'styled-components'
import Quiz from './shared/Quiz/Quiz'
import TestJS from './data/js.json'
import { AudioManager } from './shared/AudioManager'

const APPS: Application[] = [
  {
    icon: Folder,
    render: (application: Application, close) => (
      <Window
        key={application.name}
        defaultSize={{
          width: 600,
          height: 600,
        }}
        title={TestJS.name}
        onClickExit={close}
      >
        <Quiz quiz={TestJS}></Quiz>
      </Window>
    ),
    name: 'Тест JS',
  },
]

const WindowSpace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
`

function App() {
  const [windows, setWindows] = useState<Application[]>([])
  console.log(windows)
  return (
    <AudioManager>
      <div className='App' style={{ position: 'relative' }}>
        <Desktop applications={APPS} onClick={(app) => setWindows([...windows, app])} />
        <WindowSpace>
          {windows.map((wnd) =>
            wnd.render(wnd, () => setWindows(windows.filter((w) => w.name !== wnd.name))),
          )}
        </WindowSpace>
      </div>
    </AudioManager>
  )
}

export default App
