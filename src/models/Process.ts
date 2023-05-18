import { ReactElement } from 'react'
import { IconType } from 'react-icons';

export interface IStartProcess {
    name: string
    icon: string | IconType
    render: (application: IProcess, close: () => void) => ReactElement
}

export interface IProcess extends IStartProcess {
    id: string;
}