import { quoteManagementReducer } from './domain/quoteManagement/ducks/QuoteManagementDucks'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    quoteManagement: quoteManagementReducer,
})
