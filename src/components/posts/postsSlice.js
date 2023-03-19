import { createSlice} from "@reduxjs/toolkit";
import { getCommentsByPost, getPostsByTopic } from "../../utils/asyncThunks";


const options = {
    name: 'posts',
    initialState: {},
    reducers: {
        loadPosts: (state, action) => {
            state.posts = action.payload;
        },
        loadDisplay: (state, action) => {
            state.display = action.payload;
        },

    }, 
    extraReducers: (builder) => {
        builder
        .addCase(getPostsByTopic.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(getPostsByTopic.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
            state.display = action.payload;
        })
        .addCase(getPostsByTopic.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        })
      
    }
};

const postsSlice = createSlice(options);


export const {loadPosts, loadDisplay } = postsSlice.actions;
export default postsSlice.reducer;