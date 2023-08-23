import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/slice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
