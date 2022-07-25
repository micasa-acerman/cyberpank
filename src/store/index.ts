import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import processSlice from './process/processSlice';
import systemSlice, { ISystemState } from './system/systemSlice';
import userSlice, { IUserState } from './user/userSlice';

const persistUserInfo = localStorage.getItem('auth');
const persistSystemInfo = localStorage.getItem('system');

const store = configureStore({
    reducer: {
        process: processSlice,
        user: userSlice,
        system: systemSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    preloadedState: {
        user: persistUserInfo ? (JSON.parse(persistUserInfo) as IUserState | undefined) : undefined,
        system: persistSystemInfo ? (JSON.parse(persistSystemInfo) as ISystemState | undefined) : undefined,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

store.subscribe(() => {
    localStorage.setItem('auth', JSON.stringify(store.getState().user))
    localStorage.setItem('system', JSON.stringify(store.getState().system))
})

export default store;