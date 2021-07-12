import { quoteManagementReducer } from './domain/quoteManagement/ducks/QuoteManagementDucks'

export const rootReducer = {
    quoteManagement: quoteManagementReducer,
}
