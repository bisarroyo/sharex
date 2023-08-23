import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: {}
  },
  reducers: {
    loadPosts: (state, action) => {
      state.posts = []
    }
  }
})

export const { loadPosts } = postsSlice.actions

export default postsSlice.reducer
