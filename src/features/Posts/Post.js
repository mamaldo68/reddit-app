import React from "react";

const Post = (props) => {
    const utcTime = props.post.created_utc;
    const date = new Date(utcTime * 1000);
    return (
        <div>
            <p>{props.post.title}</p>
            <p>By: {props.post.author} on r/{props.post.subreddit}</p>
            <p>score: {props.post.score} | comments: {props.post.num_comments} | {date.toUTCString()}</p>
            <br/>
        </div>
    );
}

export default Post;