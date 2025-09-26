import { createSlice } from "@reduxjs/toolkit"

const initialState = { count: 4 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
})

export default counterSlice.reducer
