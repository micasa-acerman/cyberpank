import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface ISystemState {
    background: string
}

const initialState: ISystemState = {
    background: 'https://i.gifer.com/ZIb4.gif'
}

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setBackground: (state, { payload }: PayloadAction<string>) => {
            state.background = payload
        },
        resetBackground: (state) => {
            state.background = initialState.background
        }
    }
})

export const { setBackground, resetBackground } = systemSlice.actions

export const selectSystemInfo = (state: RootState) => state.system;

export default systemSlice.reducer