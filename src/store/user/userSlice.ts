import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';


export interface IUserState {
    userName: string | null;
    isAuthorizated: boolean;
}

const initialState: IUserState = {
    userName: null,
    isAuthorizated: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, payload: PayloadAction<string>) => {
            state.userName = payload.payload
            state.isAuthorizated = true
        },
        logout: (state) => {
            state.userName = null
            state.isAuthorizated = true
        }
    }
})

export const { login, logout } = userSlice.actions

export const selectUserInfo = (state: RootState) => state.user

export default userSlice.reducer