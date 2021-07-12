import { combineEpics } from 'redux-observable'
import { AnyAction } from '@reduxjs/toolkit'
import { RootState } from './Store'

export interface EpicDependency {

}

export const rootEpic = combineEpics<AnyAction, AnyAction, RootState, EpicDependency>(

)
