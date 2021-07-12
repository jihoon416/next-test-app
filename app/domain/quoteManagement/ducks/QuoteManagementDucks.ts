import { createSlice } from '@reduxjs/toolkit'

interface QuoteManagementState {
    quotes: Array<string>
}

const initialState: QuoteManagementState = {
    quotes: [],
}

const quoteManagementSlice = createSlice({
    name: 'quoteManagement',
    initialState,
    reducers: {},
})

export const quoteManagementActions = {
    ...quoteManagementSlice.actions,
}

export const quoteManagementReducer = quoteManagementSlice.reducer
