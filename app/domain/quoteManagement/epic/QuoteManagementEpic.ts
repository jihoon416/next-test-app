import { Epic } from 'redux-observable'
import { RootState } from '../../../Store'
import { EpicDependency } from '../../../RootEpic'
import { AnyAction } from '@reduxjs/toolkit'
import { catchError, filter, from, map, mergeMap, of } from 'rxjs'
import { quoteManagementActions } from '../ducks/QuoteManagementDucks'

type QuoteManagementEpic = Epic<AnyAction, AnyAction, RootState, EpicDependency>

const fetchEpic: QuoteManagementEpic = (action$, state$, { quotesAPI }) => {
    const { fetchRequest, fetchSuccess, fetchFailure } = quoteManagementActions
    return action$
        .pipe(
            filter(fetchRequest.match),
            mergeMap(() => {
                return from(quotesAPI.fetchQuotes())
                    .pipe(
                        map((quotes) => {
                            return fetchSuccess({ quotes })
                        }),
                        catchError((e) => {
                            return of(fetchFailure(e))
                        }),
                    )
            }),
        )
}

export const quoteManagementEpics = [
    fetchEpic,
]
