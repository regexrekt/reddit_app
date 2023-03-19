export const CommentReply = (props) => {
    
    const {body, author} = props;
    
    return (
        <div className='comment-reply-details'>
            <div className='comment-reply-body'>{body}</div>
            <div className='comment-reply-author'>{author}</div>
        </div>
    )
}