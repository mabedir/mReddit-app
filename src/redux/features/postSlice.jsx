import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch posts for a subreddit
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddit}/hot.json`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.data.children.map((child) => ({
        id: child.data.id,
        title: child.data.title,
        author: child.data.author,
        url: child.data.url,
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default postsSlice.reducer;
