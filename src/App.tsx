import { useEffect, useState } from 'react'
import './App.css'
import { Application, Desktop } from './shared/Desktop/Desktop'
import Window from './shared/kit/Window'
import Folder from './images/folder.png'
import styled from 'styled-components'
import Quiz from './shared/Quiz/Quiz'
import TestJS from './data/js.json'
import { useAudioContext } from './context/AudioContext'

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
  {
    icon: Folder,
    render: (application: Application, close) => (
      <Window
        key={application.name}
        defaultSize={{
          width: 600,
          height: 600,
        }}
        title='Кабанчики Vibe'
        onClickExit={close}
      >
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/pQa3eG3b3o4'
          title='Ormie The Pig With Cookie Song from Honey Bunny'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </Window>
    ),
    name: 'Кабанчики',
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
  const ctx = useAudioContext()

  useEffect(() => {
    ctx.playAudio('')
  }, [])
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
