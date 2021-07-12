import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface QuoteManagementState {
    quotes: Array<string>
}

const initialState: QuoteManagementState = {
    quotes: [],
}

const quoteManagementSlice = createSlice({
    name: 'quoteManagement',
    initialState,
    reducers: {
        fetchRequest: (state) => {
            return state
        },
        fetchSuccess: (state, action: PayloadAction<{ quotes: Array<string> }>) => {
            const { quotes } = action.payload
            state.quotes = quotes
        },
        fetchFailure: (state, action: PayloadAction<Error>) => {
            return state
        },
    },
})

export const quoteManagementActions = {
    ...quoteManagementSlice.actions,
}

export const quoteManagementReducer = quoteManagementSlice.reducer
