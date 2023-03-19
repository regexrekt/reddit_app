import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../components/posts/postsSlice'
import topicReducer from '../components/topic/topicSlice';
import commentsReducer from '../components/comments/commentsSlice'


export const store = configureStore({
  reducer: {
    topic: topicReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});
