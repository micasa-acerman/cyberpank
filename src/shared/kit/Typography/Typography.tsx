import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: 'IBM Plex Mono';
  font-weight: 800;
  font-size: 40px;
  line-height: 1.2em;
  margin: 0;
  padding: 0;
`
export const H2 = styled.h2`
  font-family: 'IBM Plex Mono';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2em;
  margin: 0;
  padding: 0;
`

export const H3 = styled.h3`
  font-family: 'IBM Plex Mono';
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2em;
  margin: 0;
  padding: 0;
`

type TextProps = {
  align?: 'center' | 'left' | 'right' | 'justify';
  noSelection?: boolean;
}

export const Text = styled.p<TextProps>`
  font-family: 'IBM Plex Mono';
  font-weight: normal;
  font-size: 16px;
  line-height: 1em;
  text-align: left;
  text-align: ${(props) => props.align || 'left'};
  user-select: ${({noSelection})=>noSelection?'none':'inherit'}
`
