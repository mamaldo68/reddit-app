import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadComments } from "../Comments/commentsSlice";

const Post = ({post}) => {
    const utcTime = post.data.created_utc;
    const date = new Date(utcTime * 1000);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickHandler = (object) => {
        dispatch(loadComments(object.permalink));
        navigate(`${object.permalink}`);
    };

    return (
        <div>
            <p>{post.data.title}</p>
            {post.data.post_hint === "image" && <img src={post.data.url} width={250} height={250}></img>}
            <p>By: {post.data.author} on r/{post.data.subreddit}</p>
            <p>score: {post.data.score} | <span onClick={() => clickHandler(post.data)}>comments: {post.data.num_comments}</span> | {date.toUTCString()}</p>
            <br/>
        </div>
    );
}

export default Post;