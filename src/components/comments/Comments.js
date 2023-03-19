import { CommentReply } from "./CommentReplies";
import { useState } from "react";

export const Comment = (props) => {

    const { comment } = props;

    const [commentRepliesDisplayStyle, setCommentRepliesDisplayStyle] = useState('none');

    const handleCommentRepliesClick = () => {
        if (commentRepliesDisplayStyle === 'none') {
            setCommentRepliesDisplayStyle('block');
        } else {
            setCommentRepliesDisplayStyle('none');
        }
    }

    return (
        <div className='comment'>
            <div className='commentBody'>{comment.body}</div>

            <div>
                <div className='comment-details'>
                    <div className='comment-author'>{comment.author}</div>
                    <div className='comment-upvotes'>{comment.ups > 0 && `${comment.ups} 👍`}</div>
                    <div className='comment-replyButton' onClick={handleCommentRepliesClick}>{comment.replies && `${comment.replies.data.children.length} 💬`}</div>
                </div>

                <div className='comment-reply'  style={{ display: commentRepliesDisplayStyle }}>
                    {comment.replies && comment.replies.data.children.map(
                        reply => {
                            return (
                                <CommentReply key={comment.replies.data.children.indexOf(reply)} body={reply.data.body} author={reply.data.author} />
                            )
                        }
                    )}
                </div>


            </div>
        </div>
    )
}