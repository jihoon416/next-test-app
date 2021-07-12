import { RootState } from '../../../Store'
import { createSelector } from '@reduxjs/toolkit'

const quoteManagementState = (state: RootState) => state.quoteManagement

const quotes = createSelector(
    quoteManagementState,
    (state) => state.quotes,
)

export const quoteManagementSelector = {
    quotes,
}
