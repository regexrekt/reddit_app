import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'topic',
    initialState: {
        topic: 'Battle Stations',
        urlParam: '/r/battlestations'
    },
    reducers: {
        changeTopic: (state, action) => {
            state.topic = action.payload
        },
        changeUrlParam: (state, action) => {
            state.urlParam = action.payload
        }
    }
    
};

const topicSlice = createSlice(options);

export const {changeTopic, changeUrlParam} = topicSlice.actions;

export default topicSlice.reducer;