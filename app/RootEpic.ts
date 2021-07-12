import { combineEpics } from 'redux-observable'
import { AnyAction } from '@reduxjs/toolkit'
import { RootState } from './Store'
import { QuotesAPIType } from './APIType/QuotesAPIType'
import { quoteManagementEpics } from './domain/quoteManagement/epic/QuoteManagementEpic'

export interface EpicDependency {
    quotesAPI: QuotesAPIType
}

export const rootEpic = combineEpics<AnyAction, AnyAction, RootState, EpicDependency>(
    ...quoteManagementEpics,
)
