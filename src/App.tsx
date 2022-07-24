import { useState } from 'react'
import './App.css'
import { Application, Desktop } from './shared/Desktop/Desktop'
import Window from './shared/kit/Window'
import Folder from './images/folder.png'
import styled from 'styled-components'
import Quiz from './shared/Quiz/Quiz'
import TestJS from './data/js.json'

const APPS: Application[] = [
  {
    icon: Folder,
    render: (application: Application, close) => (
      <Window key={application.name} title={TestJS.name} onClickExit={close}>
        <Quiz quiz={TestJS}></Quiz>
      </Window>
    ),
    name: 'JS Test',
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
    <div className='App' style={{ position: 'relative' }}>
      <Desktop applications={APPS} onClick={(app) => setWindows([...windows, app])} />
      <WindowSpace>
        {windows.map((wnd) =>
          wnd.render(wnd, () => setWindows(windows.filter((w) => w.name !== wnd.name))),
        )}
      </WindowSpace>
    </div>
  )
}

export default App
