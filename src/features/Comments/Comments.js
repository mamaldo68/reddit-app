import React from "react";
import Contents from "./Contents";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";

const Comments = () => {
    const comments = useSelector(selectComments);
    return (
        <div>
            <Contents/>
            {comments && comments.map(comment => <Comment comment={comment}/>)}
        </div>
    );
};

export default Comments;