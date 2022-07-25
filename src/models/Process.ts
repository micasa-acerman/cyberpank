import { ReactElement } from 'react'

export interface IStartProcess {
    name: string
    icon: string
    render: (application: IProcess, close: () => void) => ReactElement
}

export interface IProcess extends IStartProcess {
    id: string;
}