import { createContext, useContext } from 'react'

type SoundContextProps = {
  playAudio(url: string): void
}

export const SoundContext = createContext<SoundContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  playAudio: () => {},
})

export const useSoundContext = () => {
  return useContext(SoundContext)
}
