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
        title="Why did you open it?"
        onClickExit={close}
      >
        <iframe width="100%" height="99%" src="https://www.youtube.com/embed/xiyrXO2j08E" title="Седьмой лепесток" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Window>
    ),
    name: 'No entry!',
  },
]
