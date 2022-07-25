import { FC } from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../../constants/theme'
import { useSoundContext } from '../../../context/SoundContext'

type ButtonProps = {
  variant: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>`
  background: ${({ variant }) =>
    variant == 'primary' ? baseTheme.colors.primary : baseTheme.colors.secondary};
  color: white;
  padding: 0.2em 0.6em;
  font-family: 'IBM Plex Mono';
  box-shadow: 2px 2px 0px #000a;
  cursor: pointer;
  :active {
    box-shadow: 4px 4px 0px #000a;
  }
`
export type ButtonComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonComponent: FC<ButtonComponentProps & ButtonProps> = ({
  onClick,
  variant,
  ...props
}) => {
  const ctx = useSoundContext()
  return (
    <Button
      variant={variant}
      {...props}
      onClick={(e) => {
        onClick && onClick(e)
        ctx.playAudio('/click.mp3')
      }}
    ></Button>
  )
}

export default ButtonComponent
