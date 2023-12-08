import React from "react";
import Contents from "./Contents";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import styles from "./Comments.module.css";

const Comments = () => {
    const comments = useSelector(selectComments);
    return (
        <div>
            <Contents/>
            <div  className={styles.container}>
                <p className={styles.bold}>Comments</p>
                {comments && comments.map(comment => <Comment comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;