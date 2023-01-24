import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    location: null,
    startDate: null,
    endDate: null
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search: (state, action) => {
            state.type = action.payload.type
            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate
        },
    },
})

export const { search } = searchSlice.actions

export default searchSlice.reducer