
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { IProcess, IStartProcess } from '../../models/Process'

interface ProcessState {
    list: IProcess[]
}

const initialState: ProcessState = {
    list: []
}

const processSlice = createSlice({
    name: 'process',
    initialState,
    reducers: {
        addProcess: (state, payload: PayloadAction<IStartProcess>) => {
            state.list.push({
                id: new Date().toString(),
                ...payload.payload
            })
        },
        stopProcess: (state, payload: PayloadAction<string>) => {
            state.list = state.list.filter((p) => p.id !== payload.payload)
        },
        clearProcessList: (state) => {
            state.list = []
        }
    }
})

export const { addProcess, clearProcessList, stopProcess } = processSlice.actions

export const selectProcessList = (state: RootState) => state.process.list

export default processSlice.reducer