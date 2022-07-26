import { IStartProcess, IProcess } from '../models/Process'
import Window from '../shared/kit/Window'
import Quiz from '../shared/Quiz/Quiz'
import Folder from '../assets/images/folder.png'
import { JS_TEST } from '../assets/data/js'
import SettingWidget from '../components/Settings'

export const APPS: IStartProcess[] = [
  {
    icon: Folder,
    render: (application: IProcess, close) => (
      <Window
        key={application.name}
        defaultSize={{
          width: 600,
          height: 600,
        }}
        title={JS_TEST.name}
        onClickExit={close}
      >
        <Quiz quiz={JS_TEST}></Quiz>
      </Window>
    ),
    name: 'Тест JS',
  },
  {
    icon: Folder,
    render: (application: IProcess, close) => (
      <Window
        key={application.name}
        defaultSize={{
          width: 600,
          height: 600,
        }}
        title={'Настройки'}
        onClickExit={close}
      >
        <SettingWidget application={application} close={close} />
      </Window>
    ),
    name: 'Настройки',
  },
  {
    icon: Folder,
    render: (application: IProcess, close) => (
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
