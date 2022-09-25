import { createSlice } from "@reduxjs/toolkit";
import { getRepos } from "../components/actions/repos";

const todoSlice = createSlice({
    name: 'repos',
    initialState: {
        items: [],
        status: null,
        error: null
    },
    reducers: {
        setRepos(state, action) {
            state.items = action.payload.repos
        }
    },
    extraReducers: {
        [getRepos.pending]: (state, action) => {
            state.status = "loading";
            state.error = null
        },
        [getRepos.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.items = action.payload
        },
        [getRepos.rejected]: (state, action) => {}
    }
})

export const {setRepos} = todoSlice.actions;

export default todoSlice.reducer;