import { FC, ReactElement, useState } from 'react'
import { SoundContext } from '../../context/SoundContext'

type AudioType = {
  url: string
  el: HTMLAudioElement
}

export const AudioManager: FC<{ children: ReactElement }> = ({ children }) => {
  const [list, setList] = useState<AudioType[]>([])

  const handlePlayAudio = (url: string) => {
    let item = list.find((x) => x.url === url)
    if (!item) {
      item = {
        url,
        el: new Audio(url),
      }
      setList([...list, item])
    }
    item.el.currentTime = 0
    item.el.play()
  }
  return (
    <SoundContext.Provider value={{ playAudio: handlePlayAudio }}>{children}</SoundContext.Provider>
  )
}
