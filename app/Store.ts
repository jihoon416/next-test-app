import { AnyAction, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { rootReducer } from './RootReducer'
import { createEpicMiddleware } from 'redux-observable'
import { EpicDependency, rootEpic } from './RootEpic'
import { QuotesAPI } from '../api/QuotesAPI'

export type RootState = ReturnType<typeof rootReducer>

const makeStore = () => {

    const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState, EpicDependency>({
        dependencies: {
            quotesAPI: QuotesAPI,
        },
    })

    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [
            ...getDefaultMiddleware({
                thunk: false,
            }),
            epicMiddleware,
        ],
    })

    epicMiddleware.run(rootEpic)

    return store
}

export const wrapper = createWrapper(makeStore)
