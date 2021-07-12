import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { rootReducer } from './RootReducer'

const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: true,
    })
}

export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>
export const wrapper = createWrapper(makeStore)
