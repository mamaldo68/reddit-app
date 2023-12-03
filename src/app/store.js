import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/Posts/postsSlice";
import subredditReducer from "../features/Subreddit/subredditSlice";


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddit: subredditReducer,
  },
});
