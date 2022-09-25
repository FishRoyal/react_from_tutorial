import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRepos = createAsyncThunk(
    "repos/get",
    async (searchQuery = "stars:%3E1")  => {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`);
        return response.data
    }
)