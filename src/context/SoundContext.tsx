import { createContext, useContext } from 'react'

type AudioType = '/click.mp3' | '/da-jeto-zhestko.mp3' | '/papich-tratatata.mp3'

type SoundContextProps = {
  playAudio(url: AudioType): void
}

export const SoundContext = createContext<SoundContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  playAudio: () => {},
})

export const useSoundContext = () => {
  return useContext(SoundContext)
}
