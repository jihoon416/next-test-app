import Head from 'next/head'
import { HomeView } from './HomeView'
import { useSelector } from 'react-redux'
import { quoteManagementSelector } from '../app/domain/quoteManagement/selector/QuoteManagementSelector'
import { RootState, wrapper } from '../app/Store'
import { quoteManagementActions } from '../app/domain/quoteManagement/ducks/QuoteManagementDucks'
import { QuotesAPI } from '../api/QuotesAPI'
import { rootEpic } from '../app/RootEpic'
import { Observable, of, toArray } from 'rxjs'
import { StateObservable } from 'redux-observable'

const Index = () => {

    const quotes = useSelector(quoteManagementSelector.quotes)

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app'/>
                <link rel='icon' href='/public/favicon.ico'/>
            </Head>
            <HomeView quotes={quotes}/>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    // https://github.com/mquintal/next-redux-observable/blob/2115291bf5f309862d1fa4ea840497abfadbf447/src/resolve-actions.js#L23
    const state$ = new StateObservable(new Observable<RootState>(), store.getState())
    // https://jicjjang.github.io/posts/next-redux-wrapper2
    const fetchRequest$ = of(quoteManagementActions.fetchRequest())
    const actions = await rootEpic(fetchRequest$, state$, { quotesAPI: QuotesAPI }).pipe(toArray()).toPromise();
    (actions ?? []).forEach(store.dispatch)
    return {
        props: {},
    }
})

export default Index
