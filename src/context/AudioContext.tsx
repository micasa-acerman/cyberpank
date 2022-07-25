import { createContext, useContext } from 'react'

type AudioContextProps = {
  playAudio(url: string): void
}

export const AudioContext = createContext<AudioContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  playAudio: () => {},
})

export const useAudioContext = () => {
  return useContext(AudioContext)
}
