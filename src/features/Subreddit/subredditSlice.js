import { createSlice } from "@reduxjs/toolkit";

export const subredditSlice = createSlice({
    name: "subreddit",
    initialState: {
        subreddit: "",
        sortType: "hot",
    },
    reducers: {
        addSubreddit: (state, action) => {
            state.subreddit = action.payload;
        },
        addSortType: (state, action) => {
            state.sortType = action.payload;
        },
    },
});

export const selectSubreddit = (state) => state.subreddit.subreddit;
export const selectSortType = (state) => state.subreddit.sortType;
export const { addSubreddit, addSortType } = subredditSlice.actions;
export default subredditSlice.reducer;