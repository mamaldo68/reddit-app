import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/Posts/postsSlice";
import subredditReducer from "../features/Subreddit/subredditSlice";
import commentsReducer from "../features/Comments/commentsSlice";


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddit: subredditReducer,
    comments: commentsReducer,
  },
});
