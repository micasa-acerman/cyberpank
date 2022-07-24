import React, { FC } from 'react'
import styled from 'styled-components'
import { IQuestion } from '../../models/Question'
import { Button } from '../kit/Button'
import { H3 } from '../kit/Typography'

type Props = {
  question: IQuestion
  onSelect(option: string, idx: number): void
}

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.2em;
  }
`

export const Question: FC<Props> = ({ question, onSelect }) => {
  return (
    <>
      <H3>{question.title}</H3>
      <OptionList>
        {question.options.map((opt, idx) => (
          <Button variant='primary' key={opt} onClick={() => onSelect(opt, idx)}>
            {opt}
          </Button>
        ))}
      </OptionList>
    </>
  )
}
