import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk("posts/loadPosts", async ({ subreddit, sortType }) => {
    
    try {
        
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/${sortType}/.json${sortType === "top"? "?sort=top&t=all" : ""}`);

        if(!response) {
            throw new Error(`HTTP error Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        return jsonResponse.data.children;

    } catch(error) {
        console.error("Error:", error.message);
    }
})

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: false,
        failedToLoad: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadPosts.pending, (state) => {
            state.isLoading = true;
            state.failedToLoad = false;
        })
        .addCase(loadPosts.rejected, (state) => {
            state.isLoading = false;
            state.failedToLoad = true;
        })
        .addCase(loadPosts.fulfilled, (state, action) => {
           state.isLoading = false;
           state.failedToLoad = false;
           state.posts =  action.payload;
        })
    }
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;