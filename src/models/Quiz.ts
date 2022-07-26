import { IQuestion } from './Question'

export interface IQuiz {
    questions: IQuestion[]
    author: string
    passingScore: number
    createdDate: string
    timer: number
    name: string
    description: string
}