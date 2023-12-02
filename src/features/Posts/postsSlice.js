import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../mockData";

const initialState = {
    posts: mockData.data.children.map(post => post.data),
}

export const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {},
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;