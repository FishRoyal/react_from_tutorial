import { createSlice } from "@reduxjs/toolkit";
import { getRepos } from "../components/actions/repos";

const todoSlice = createSlice({
    name: 'repos',
    initialState: {
        items: [],
        status: null,
        error: null,
        currentPage: 1,
        perPage: 20,
        totalCount: 0
    },
    reducers: {
        setPage(state, action) {
            state.currentPage = action.payload;
        }
    },
    extraReducers: {
        [getRepos.pending]: (state) => {
            state.status = "loading";
            state.error = null
        },
        [getRepos.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.items = action.payload.items;
            state.totalCount = action.payload.total_count
        },
        [getRepos.rejected]: (state, action) => {}
    }
})

export const {setPage} = todoSlice.actions;

export default todoSlice.reducer;