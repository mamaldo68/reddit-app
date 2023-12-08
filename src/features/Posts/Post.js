import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadComments } from "../Comments/commentsSlice";
import { decodeUrl } from "../../util/mediaHelperFunctions";
import styles from "./Post.module.css";

const Post = ({ post, counter }) => {
    const utcTime = post.data.created_utc;
    const date = new Date(utcTime * 1000);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickHandler = (object) => {
        dispatch(loadComments(object.permalink));
        navigate(`${object.permalink}`);
    };

    return (
        <div className={styles.container}>
            <p className={styles.count}>{counter}</p>
            {post.data.thumbnail !== "self" && post.data.thumbnail !== "spoiler" && <img className={styles.thumbnail} src={decodeUrl(post.data.thumbnail)}></img>}
            <div className={styles.infoContainer} onClick={() => clickHandler(post.data)}>
                <p className={styles.title}>{post.data.title}</p> 
                <p className={styles.info}>
                    By: <span className={post.data.distinguished === "moderator" || post.data.author === "AutoModerator" ? styles.mod : ""}>{post.data.author}</span> to r/{post.data.subreddit}
                </p>
                <p className={styles.moreInfo}>score: {post.data.score} | comments: {post.data.num_comments} | {date.toUTCString()}</p>
            </div> 
        </div>
    );
}

export default Post;