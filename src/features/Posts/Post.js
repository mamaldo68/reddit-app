import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "../Comments/commentsSlice";
import { loadPosts } from "./postsSlice";
import { selectSortType, addSubreddit } from "../Subreddit/subredditSlice";
import { decodeUrl } from "../../util/mediaHelperFunctions";
import styles from "./Post.module.css";

const Post = ({ post, counter }) => {
    const utcTime = post.data.created_utc;
    const date = new Date(utcTime * 1000);
    const sortType = useSelector(selectSortType);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const commentClickHandler = (object, event) => {
        dispatch(loadComments(object.permalink));
        navigate(`${object.permalink}`);
        event.stopPropagation();
    };

    const subredditClickHandler = (object, event) => {
        dispatch(loadPosts({subreddit: object.subreddit, sortType: sortType}));
        dispatch(addSubreddit(object.subreddit));
        navigate(`/r/${object.subreddit}/${sortType}`);
        event.stopPropagation();
    };

    const getThumbnail = (object) => {
        switch(object.data.thumbnail) {
            case "nsfw":
                const getResolutions = object.data.preview.images[0].resolutions;
                const getImg = getResolutions[0];
                return (
                    <div className={`${styles.thumbnail}`}>
                        <img className={`${styles.thumbnail} ${styles.nsfw}`} src={decodeUrl(getImg.url)} width={getImg.width} height={getImg.height}/>
                    </div>
                );
            case "spoiler":
                return (
                    <div className={`${styles.thumbnail}`}>
                        <img className = {styles.otherThumbnails} src="/images/spoilerPost.png"/>
                    </div>
                );
            case "self":
                return (
                    <div className={`${styles.thumbnail}`}>
                        <img className = {styles.otherThumbnails} src="/images/textPost.png"/>
                    </div>
                );
            default:
                return (
                    <div className={`${styles.thumbnail}`}>
                        <img src={decodeUrl(object.data.thumbnail)}/>
                    </div>
                );
        }
    };

    return (
        <div className={styles.container}>
            <p className={styles.count}>{counter}</p>
            {post.data.thumbnail && getThumbnail(post)}
            <div className={styles.infoContainer} onClick={(event) => commentClickHandler(post.data, event)}>
                <p className={styles.title}>{post.data.title}</p> 
                <p className={styles.info}>
                    By: <span className={post.data.distinguished === "moderator" || post.data.author === "AutoModerator" ? styles.mod : ""}>
                            {post.data.author + ' '}
                        </span> 
                    to <span className={styles.subreddit} onClick={(event) => subredditClickHandler(post.data, event)}>
                            r/{post.data.subreddit}
                        </span>
                </p>
                <p className={styles.moreInfo}>score: {post.data.score} | comments: {post.data.num_comments} | {date.toUTCString()}</p>
            </div> 
        </div>
    );
}

export default Post;