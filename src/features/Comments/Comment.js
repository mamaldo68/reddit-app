import React, { useState } from "react";
import MarkdownRenderer from "../../MarkdownRenderer/MarkDownRenderer";
import styles from "./Comment.module.css";

const Comment = ({comment}) => {
    const { author, body, replies, depth, score } = comment.data;
    const [isHidden, setIsHidden] = useState(false);

    const replyColor = () => {
        switch (depth % 4) {
            case 0:
                return `${styles.replyComment} ${styles.depthMod0}`;
            case 1:
                return `${styles.replyComment} ${styles.depthMod1}`;
            case 2:
                return `${styles.replyComment} ${styles.depthMod2}`; 
            case 3:
                return `${styles.replyComment} ${styles.depthMod3}`;
            default:
                return `${styles.replyComment}`; 
        }
    }    

    const commentStyle = depth > 0 ? replyColor() : styles.parentComment;

    const authorColor = () => {
        let style;
        if ((comment.data.distinguished && comment.data.distinguished === "moderator") || author === "AutoModerator") {
            style = `${styles.author} ${styles.mod}`;
        } else if (comment.data.is_submitter) {
            style = `${styles.author} ${styles.op}`;
        } else {
            style = styles.author;
        }
        return style;
    }

    const hideComments = () => {
        setIsHidden(!isHidden);
    }
        
    return (
        <div className={commentStyle}>
            <p>
                <span className={styles.hideButton} onClick={hideComments}>[{isHidden ? "+" : "-"}]</span>
                <span className={authorColor()}>{author}</span>
                <span className={styles.score}>{score} points</span>
            </p>
            <div className={isHidden ? styles.hidden : ""}>
            <MarkdownRenderer markdownContent={body}/>
            {replies && replies.data.children.map(comment => <Comment comment={comment}/> )}
            </div>
        </div>
        
    );
};

export default Comment;