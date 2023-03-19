import { createSelector } from 'reselect';

const selectAll = (state) => state;

export const selectTopic = createSelector(
    selectAll,
    (state) => state.topic
    );

export const selectPosts = createSelector(
    selectAll,
    (state) => state.posts
);

export const selectComments = createSelector(
    selectAll,
    (state) => state.comments
)
