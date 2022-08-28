import React, { FC, useEffect, useRef, useState } from 'react'
import { IQuiz } from '../../models/Quiz'
import { Button } from '../kit/Button'
import { HorizontalLayout, Spacing, VerticalLayout } from '../kit/Layout'
import { H2, H3, Text } from '../kit/Typography'
import { Question } from './Question'
import Cert from '../../assets/images/cert.svg'
import { toPng } from 'html-to-image'
import { useSelector } from 'react-redux'
import { selectUserInfo } from '../../store/user/userSlice'
import { markdown } from '../../utils/markdown'

type Props = {
  quiz: IQuiz
}

const START_QUIZ = -1
const END_QUIZ = -2
const END_TIMEOUT = -3

const getMaxScore = (quiz: IQuiz) => quiz.questions.reduce((p, c) => p + (c.point ?? 1), 0)

const Quiz: FC<Props> = ({ quiz }) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [questionIndex, setQuestionIndex] = useState(START_QUIZ)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(0)
  const question = quiz.questions[questionIndex]
  const maxScore = getMaxScore(quiz)
  const isPassed = score >= quiz.passingScore
  const userInfo = useSelector(selectUserInfo)

  useEffect(() => {
    setTimeout(() => {
      if (timer) {
        setTimer(timer - 1)
      } else if (questionIndex != START_QUIZ) {
        setQuestionIndex(END_TIMEOUT)
      }
    }, 1000)
  }, [timer])

  useEffect(() => {
    if (descriptionRef.current) descriptionRef.current.innerHTML = markdown.render(quiz.description)
    console.log(markdown.render(quiz.description))
  }, [quiz.description])

  const handleDownloadCert = async () => {
    const response = await fetch(Cert)
    const text = await response.text()
    const el = document.createElement('div')
    document.body.append(el)
    el.innerHTML = text
      .replace('FIO!@!#!$!$!$!!2532as', userInfo.userName ?? '')
      .replace('DA$!TA', new Date().toDateString())
    const dataUrl = await toPng(el)
    const link = document.createElement('a')
    link.download = 'сертификат.jpeg'
    link.href = dataUrl
    link.click()
    link.remove()
    el.remove()
  }
  const handleStart = () => {
    setTimer(quiz.timer)
    setScore(0)
    setQuestionIndex(0)
  }

  const handleSelect = (_opt: string, idx: number) => {
    console.log(question.answer, idx)
    if (question.answer === idx) {
      setScore(score + (question.point ?? 1))
    }
    if (quiz.questions.length - 1 !== questionIndex) setQuestionIndex(questionIndex + 1)
    else {
      setQuestionIndex(END_QUIZ)
    }
  }

  if (questionIndex === START_QUIZ)
    return (
      <VerticalLayout spacing={Spacing.m}>
        <H3>{quiz.name}</H3>
        <Text ref={descriptionRef} />
        <Button variant='primary' onClick={handleStart}>
          Старт тестирования
        </Button>
      </VerticalLayout>
    )
  if (questionIndex === END_QUIZ) {
    return (
      <VerticalLayout spacing={Spacing.s}>
        <H2>{isPassed ? 'Тест пройден' : 'Тест не пройден'}</H2>
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
