import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRepos = createAsyncThunk(
    "repos/get",
    async ({currentPage, perPage}, searchQuery = "stars:%3E1")  => {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
        return response.data
    }
)