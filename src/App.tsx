import { useState } from 'react'
import './App.css'
import { Application, Desktop } from './shared/Desktop/Desktop'
import { Image } from './shared/kit/Image/Image'
import { H1, Text } from './shared/kit/Typography'
import Window from './shared/kit/Window'
import Folder from './images/folder.png'
import styled from 'styled-components'
import Button from './shared/kit/Button/Button'

const APPS: Application[] = [
  {
    icon: Folder,
    render: (application: Application) => (
      <Window key={application.name}>
        <Image
          type='duotone-rb'
          image='https://best-mother.ru/articles/wp-content/uploads/2021/02/skolko-zhivut-loshadi.jpg'
        />
        <H1>Good horses</H1>
        <Text>
          Good horses. Your footprints are powdered The saddles fell asleep in the dust. Where are
          you, good horses, With manes right down to the ground? In what lands do you roam With
          marvelous longing in the hearts? Do you sleep in warm stalls? Or in the cold steppes?
          Whose hands do you trust The tenderness of velor lips? .. Good horses, you know The world
          without you is boring and rough. Maybe in the edges of those unseen Will you eat oats? ..
          In earthly herbs, malachite Your voices live.
        </Text>
      </Window>
    ),
    name: 'Good Hourses',
  },
  {
    icon: Folder,
    render: (application, close) => (
      <Window key={application.name} title='Alan Chert' onClickExit={close}>
        <Image
          type='duotone-br'
          image='https://sun9-34.userapi.com/impg/Pwl511gQhH8EAmNmyJ-ltgWoT10AiR0VPLjLxw/kPgWmMZySyA.jpg?size=957x1097&quality=96&sign=f803fc16911efce264525b4ebb4d554b&type=album'
        />
        <H1>Alan Chert</H1>
        <Button variant='primary' onClick={() => alert('Красава!')}>
          Согласен
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            alert('Ты пидр')
            prompt('Почему ты пидр?')
            window.open('https://natribu.org/ru/')
          }}
        >
          Не согласен
        </Button>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore incidunt aperiam
          quasi ipsam libero eveniet vitae, quo corrupti quam, sed consectetur inventore et quas eos
          magnam amet voluptatibus reprehenderit.
        </Text>
      </Window>
    ),
    name: 'Special for Alan',
  },
  {
    icon: Folder,
    render: (app, close) => (
      <Window key={app.name} title='Кабанчики' onClickExit={close}>
        <Image
          type='duotone-gp'
          image='https://img5.goodfon.ru/wallpaper/nbig/7/a1/kaban-kabanchiki-kabany-para-dva-malyshi-detenyshi-svinki-pr.jpg'
        />
        <H1>Кабанчики</H1>
        <Text>
          Кабан — всеядное парнокопытное нежвачное млекопитающее из рода кабанов (Sus). Отличается
          от домашней свиньи, которая несомненно произошла от кабана (и других близких видов),
          обладает более коротким и плотным телом, более толстыми и высокими ногами; кроме того,
          голова у кабана длиннее и тоньше, уши длиннее, острее и притом стоячие. Постоянно растущие
          верхние и нижние клыки, торчащие изо рта вверх, у самца гораздо более развиты, чем у
          самки. Упругая щетина, кроме нижней части шеи и задней части живота, образует на спине
          что-то вроде гривы с гребнем, который топорщится при возбуждении животного. Зимой под
          щетиной растёт густая и мягкая подпушь. Щетина чёрно-бурого цвета с примесью желтоватого,
          подшерсток буровато-серый, благодаря этому общая окраска серо-чёрно-бурая, морда, хвост,
          нижняя часть ног и копыта — чёрные. Пёстрые и пегие экземпляры редки и их считают
          потомками одичавших домашних свиней. Цвет щетины может разниться в зависимости от возраста
          и места обитания: если в Белоруссии встречаются чисто чёрные кабаны, то в районе озера
          Балхаш — очень светлые, почти белёсые.
        </Text>
      </Window>
    ),
    name: 'Wild Boars',
  },
  {
    icon: Folder,
    render: (application, close) => (
      <Window key={application.name} title='Россия победит!' onClickExit={close}>
        <Image
          type='duotone-rb'
          image='https://rusatribut.ru/files/products/flag-so-stalinim-nashe-delo-pravoe-pobeda-budet-za-nami.401x401.jpg?0fecc76408a409f7ffade8360ba0bb95нф'
        />
        <H1>Pobeda budet za nami</H1>
        <Button variant='primary' onClick={() => alert('Красава!')}>
          Согласен
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            alert('Ты укрнацисткий пидр')
            prompt('Почему ты пидр?')
            window.open('https://natribu.org/ru/')
          }}
        >
          Не согласен
        </Button>
        <Text>
          «Наше дело правое, враг будет разбит, победа будет за нами!» — заключительная фраза
          обращения к советскому народу, которое заместитель Председателя Совета народных комиссаров
          СССР В. М. Молотов зачитал в 12 часов дня 22 июня 1941 года — день начала Великой
          Отечественной войны.
        </Text>
      </Window>
    ),
    name: 'Palegray',
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
