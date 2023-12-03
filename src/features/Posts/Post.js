import React from "react";

const Post = ({post}) => {
    const utcTime = post.data.created_utc;
    const date = new Date(utcTime * 1000);
    return (
        <div>
            <p>{post.data.title}</p>
            <img src={post.data.url} width={250} height={250}></img>
            <p>By: {post.data.author} on r/{post.data.subreddit}</p>
            <p>score: {post.data.score} | comments: {post.data.num_comments} | {date.toUTCString()}</p>
            <br/>
        </div>
    );
}

export default Post;