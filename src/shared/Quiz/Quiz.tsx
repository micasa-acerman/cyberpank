import React, { FC, useEffect, useState } from 'react'
import { IQuiz } from '../../models/Quiz'
import { Button } from '../kit/Button'
import { HorizontalLayout, Spacing, VerticalLayout } from '../kit/Layout'
import { H2 } from '../kit/Typography'
import { Question } from './Question'
import Cert from '../../images/cert.svg'
import 'svg2pdf.js'
import jsPDF from 'jspdf'

type Props = {
  quiz: IQuiz
}

const START_QUIZ = -1
const END_QUIZ = -2
const END_TIMEOUT = -3

const getMaxScore = (quiz: IQuiz) => quiz.questions.reduce((p, c) => p + (c.point ?? 1), 0)

const Quiz: FC<Props> = ({ quiz }) => {
  const [questionIndex, setQuestionIndex] = useState(START_QUIZ)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(0)
  const question = quiz.questions[questionIndex]
  const maxScore = getMaxScore(quiz)
  const isPassed = score >= maxScore

  useEffect(() => {
    setTimeout(() => {
      if (timer) {
        setTimer(timer - 1)
      } else if (questionIndex != START_QUIZ) {
        setQuestionIndex(END_TIMEOUT)
      }
    }, 1000)
  }, [timer])

  const handleDownloadCert = () => {
    fetch(Cert)
      .then((data) => data.text())
      .then((data) => {
        const doc = new jsPDF('landscape', 'cm')
        const el = document.createElement('div')
        document.body.append(el)
        el.innerHTML = data.replace('FIO!@!#!$!$!$!!2532as', prompt('Как твое поганяло?') ?? 'Член')
        const svg = el.getElementsByTagName('svg')[0]

        setTimeout(
          () =>
            doc
              .svg(svg, {
                x: 0,
                y: 0,
                width: 29.7,
                height: 21,
              })
              .then(() => doc.save('Снюс.pdf'))
              .catch(() => console.log('problem')),
          1000,
        )
      })
  }
  const handleStart = () => {
    setTimer(quiz.timer)
    setScore(0)
    setQuestionIndex(0)
  }

  const handleSelect = (_opt: string, idx: number) => {
    if (question.answer === idx) {
      setScore(question.point ?? 1)
    }
    if (quiz.questions.length - 1 !== questionIndex) setQuestionIndex(questionIndex + 1)
    else {
      setQuestionIndex(END_QUIZ)
    }
  }

  if (questionIndex === START_QUIZ)
    return (
      <>
        <Button variant='primary' onClick={handleStart}>
          Старт тестирования
        </Button>
      </>
    )
  if (questionIndex === END_QUIZ) {
    return (
      <VerticalLayout spacing={Spacing.s}>
        <H2>{isPassed ? 'Ну ты гиг!' : 'Тест не пройден'}</H2>
        <HorizontalLayout>
          Баллов набрано: {score} / {maxScore}
        </HorizontalLayout>
        <HorizontalLayout>Проходной балл: {quiz.passingScore}</HorizontalLayout>
        {isPassed && (
          <Button variant='primary' onClick={handleDownloadCert}>
            Скачать сертификат
          </Button>
        )}
      </VerticalLayout>
    )
  }
  return (
    <VerticalLayout>
      <HorizontalLayout>
        <span>
          Вопрос: {questionIndex + 1}/{quiz.questions.length}
        </span>
        <span>
          {Math.floor(timer / 60)}:{timer % 60}
        </span>
      </HorizontalLayout>
      <Question onSelect={handleSelect} question={question} />
    </VerticalLayout>
  )
}

export default Quiz
