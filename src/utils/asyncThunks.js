import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT, getPostComments, getPosts } from "../api/redditAPI";



export const getPostsByTopic = createAsyncThunk(
    'posts/getPostsByTopic',
    async (arg, thunkAPI) => {
        const response = await getPosts(arg);
        return response
    }
);

export const getCommentsByPost = createAsyncThunk(
    'comments/getCommentsByPost',
    async (arg, thunkAPI) => {
        const comments = await getPostComments(arg);
        return comments
    }
);



