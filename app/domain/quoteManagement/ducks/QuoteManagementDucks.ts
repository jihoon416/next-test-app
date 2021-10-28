import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

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
            console.error(action.payload)
            return state
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher((action) => action.type === HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.quoteManagement,
                }
            })
    },
})

export const quoteManagementActions = {
    ...quoteManagementSlice.actions,
}

export const quoteManagementReducer = quoteManagementSlice.reducer
