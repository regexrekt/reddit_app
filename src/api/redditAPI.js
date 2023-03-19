export const API_ROOT = 'https://www.reddit.com';

//why do I need this? I can store the preselected topics as a local state in Topics.js

/*export const getTopics = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((topics) => topics.data)
}*/

export const getPosts = async (topicUrlParam) => {
    const response = await fetch(`${API_ROOT}${topicUrlParam}.json`);
    const json = await response.json();
    const postsData = json.data.children.map((post) => post.data);
    postsData.sort((a, b) => b.created_utc - a.created_utc);
    return postsData;
};

export const getPostComments = async (postUrlParam) => {
    const response = await fetch(`${API_ROOT}${postUrlParam}.json`);
    const json = await response.json();
    const commentsData = json[1].data.children.map((comments) => comments.data);
    
    commentsData
    .sort((a, b) => {
        const aRepliesLength = a.replies === '' ? 0 : a.replies.data.children.length;
        const bRepliesLength = b.replies === '' ? 0 : b.replies.data.children.length;
        return bRepliesLength - aRepliesLength;
    })
    .sort((a, b) => b.ups - a.ups);
    
    return commentsData;
}

