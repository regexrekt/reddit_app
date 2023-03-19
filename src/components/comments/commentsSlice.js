import { createSlice } from "@reduxjs/toolkit";
import { getCommentsByPost } from "../../utils/asyncThunks";

const options = {
    name: 'comments',
    initialState: {comments: []},
    reducers: {
        loadComments: (state, action) => {
            state.comments = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
        .addCase(getCommentsByPost.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(getCommentsByPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.comments = action.payload;
        })
        .addCase(getCommentsByPost.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }
};

export const commentsSlice = createSlice(options);

export const {loadComments} = commentsSlice.actions;
export default commentsSlice.reducer;