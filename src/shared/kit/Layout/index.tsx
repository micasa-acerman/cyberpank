import styled from 'styled-components'

export enum Spacing {
  xs = 4,
  s = 6,
  m = 8,
  l = 12,
}

interface LayoutProps {
  spacing?: Spacing
}

const VerticalLayout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  > *:not(:last-child) {
    margin-bottom: ${(props) => props.spacing}px;
  }
`

const HorizontalLayout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > *:not(:last-child) {
    margin-left: ${(props) => props.spacing}px;
  }
`

export { VerticalLayout, HorizontalLayout }
