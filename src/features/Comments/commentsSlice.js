import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk("comments/loadComments", async (post) => {

    try{
        const baseFetchUrl = "https://www.reddit.com";
        const response = await fetch(`${baseFetchUrl}${post}.json`);

        if(!response) throw new Error(`HTTP error Status: ${response.status}`);

        const jsonResponse = await response.json();
        const contents = jsonResponse[0].data.children[0];
        const comments = jsonResponse[1].data.children;

        return {contents: contents, comments: comments};

    } catch(error) {
        console.error("Error:", error.message);
    }
});

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        contents: {},
        comments: [],
        isLoading: false,
        faliedToLoad: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadComments.pending, (state) => {
            state.isLoading = true;
            state.faliedToLoad = false;
        })
        .addCase(loadComments.rejected, (state) => {
            state.isLoading = false;
            state.faliedToLoad = true;
        })
        .addCase(loadComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.faliedToLoad = false;
            state.contents = action.payload.contents;
            state.comments = action.payload.comments;
        })
    }
});

export const selectContents = (state) => state.comments.contents;
export const selectComments = (state) => state.comments.comments;
export default commentsSlice.reducer;