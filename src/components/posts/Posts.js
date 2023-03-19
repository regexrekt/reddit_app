import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, selectTopic } from "../../utils/selectors";
import { getPostsByTopic } from "../../utils/asyncThunks";
import { Card } from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


export const Posts = () => {

    const currentTopic = useSelector(selectTopic);
    const currentTopicUrl = currentTopic.urlParam;

    const dispatch = useDispatch();

    const currentPostsSlice = useSelector(selectPosts);

    const [selectedPost, setSelectedPost] = useState(null)
    
    useEffect(() => {
        dispatch(getPostsByTopic(currentTopicUrl));
    }, [dispatch, currentTopicUrl])

    return (
       <div>
            {currentPostsSlice.isLoading === false ? currentPostsSlice.display.map(
                post => {
                    
                    return (

                            <Card 
                                key={currentPostsSlice.display.indexOf(post)} 
                                id={post.id}
                                name={post.name}
                                title={post.title}
                                upvotes={post.ups}
                                author={post.author}
                                postImage={post.url_overridden_by_dest}
                                commentsUrlParam = {post.permalink}
                                selftext = {post.selftext}
                                selectedPost = {selectedPost}
                                setSelectedPost = {(arg) => setSelectedPost(arg)}
                                type = {post.post_hint}
                                utc = {post.created}
                                commentCount = {post.num_comments}
                            />
                            

                    

                    )
                }
            ) : <div id='postLoading'>
                    <FontAwesomeIcon icon={faSpinner}/>
                </div>}

        </div>
    )
}