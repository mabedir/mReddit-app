import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from './features/subRedditSlice.jsx';
import postsReducer from './features/postSlice.jsx';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,
  },
});
