import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch subreddits
export const fetchSubreddits = createAsyncThunk(
  'subreddits/fetchSubreddits',
  async () => {
    const response = await fetch(
      'https://www.reddit.com/subreddits/popular.json'
    );
    const data = await response.json();
    return data.data.children.map((child) => ({
      id: child.data.id,
      name: child.data.display_name,
      title: child.data.title,
    }));
  }
);

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchSubreddits.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default subredditsSlice.reducer;
