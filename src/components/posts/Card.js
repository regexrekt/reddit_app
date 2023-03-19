import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByPost } from "../../utils/asyncThunks";
import { selectComments } from "../../utils/selectors";
import { Comment } from "../comments/Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp, faCircleArrowDown, faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
    const { id, title, upvotes, postImage, author, commentsUrlParam, selftext, selectedPost, setSelectedPost, name, type, utc, commentCount } = props;

    const currentCommentsSlice = useSelector(selectComments);

    const dispatch = useDispatch();

    const [upvoteColor, setUpvoteColor] = useState('#0854a6');
    const [downvoteColor, setDownvoteColor] = useState('#0854a6');
    const [voteCountColor, setVoteCountColor] = useState('black');
    const [voteCount, setVoteCount] = useState(upvotes);
    const [commentsDisplayStyle, setCommentsDisplayStyle] = useState('none')


    let upvoteCount = upvotes;
    let ts = new Date(utc * 1000);


    const handleUpvoteClick = () => {
        if (upvoteColor === '#0854a6') {
            setVoteCount(upvoteCount += 1);
            setUpvoteColor('green');
            setVoteCountColor('green');
            setDownvoteColor('#0854a6');
        } else if (upvoteColor === 'green') {
            setVoteCount(upvotes);
            setUpvoteColor('#0854a6');
            setVoteCountColor('black')
        }
    }

    const handleDownvoteClick = () => {
        if (upvoteColor === 'green') {
            setVoteCount(upvotes)
        }
        setDownvoteColor('red');
        setVoteCountColor('black');
        setUpvoteColor('#0854a6')
        if (downvoteColor === 'red') {
            setDownvoteColor('#0854a6')
        }
    }

    const resetCommentsDisplay = () => {
        if (currentCommentsSlice.comments.length > 0 && name !== selectedPost) {
            setCommentsDisplayStyle('none')
        } else {
            return
        }
    }

    const handleCommentClick = (e) => {
        const clickedText = e.target.innerHTML;
        if (commentsDisplayStyle === 'none' && clickedText !== `Show Comments (0)`) {
            dispatch(getCommentsByPost(commentsUrlParam));
            const selected = e.target.getAttribute('data-value');
            setSelectedPost(selected);
            setCommentsDisplayStyle('block')
        } else {
            setCommentsDisplayStyle('none')
        }
    }

    useEffect(() => {
        resetCommentsDisplay()
    }, [selectedPost])

    if (type === 'image') {
        return (
            <div id={id} className='postDiv'>

                <div className='voteSection'>
                    <div className='vote' onClick={handleUpvoteClick} style={{ color: upvoteColor }}><FontAwesomeIcon icon={faCircleArrowUp}/></div>
                    <div className='vote' style={{ color: voteCountColor }}>{voteCount}</div>
                    <div className='vote' onClick={handleDownvoteClick} style={{ color: downvoteColor }}><FontAwesomeIcon icon={faCircleArrowDown}/></div>
                </div>

                <div className='card-content'>
                    <div>
                        <h3 className='title'>
                            {title}
                        </h3>
                    </div>
                    <div className='image'>
                        <img src={postImage} alt={selftext} />
                    </div>
                    <div className='mobile-votes'>
                        <div className='mobile-up' onClick={handleUpvoteClick} style={{ color: upvoteColor }}><FontAwesomeIcon className='mobile-vote-buttons' icon={faCircleArrowUp}/></div>
                        <div className='mobile-upvote-count' style={{ color: voteCountColor }}>{voteCount} upvotes</div>
                        <div className='mobile-down' onClick={handleDownvoteClick} style={{ color: downvoteColor }}><FontAwesomeIcon className='mobile-vote-buttons' icon={faCircleArrowDown}/></div>
                    </div>
                    <div className='postDetails'>
                        <div className='author'>{author}</div>
                        <div className='commentButton' onClick={handleCommentClick} data-value={name}>{commentsDisplayStyle === 'none' ? `Show Comments (${commentCount})` : `Hide Comments`}</div>
                        <div className='timestamp'>{ts.toDateString()}</div>
                    </div>
                    <div className='comments' style={{ display: commentsDisplayStyle }}>
                        {currentCommentsSlice.isLoading === false ? currentCommentsSlice.comments.map(
                            comment => {
                                if (comment.body !== `[deleted]`) {
                                    return (
                                        <Comment key={currentCommentsSlice.comments.indexOf(comment)} comment={comment} />
                                    )
                                }
                            }
                        ) : 
                        <div className='commentsLoading'>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}