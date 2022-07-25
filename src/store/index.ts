import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import processSlice from './process/processSlice';
import userSlice, { IUserState } from './user/userSlice';

const persistUserInfo = localStorage.getItem('data');

const store = configureStore({
    reducer: {
        process: processSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    preloadedState: {
        user: persistUserInfo ? (JSON.parse(persistUserInfo) as IUserState | undefined) : undefined
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

store.subscribe(() => {
    localStorage.setItem('data', JSON.stringify(store.getState().user))
})

export default store;