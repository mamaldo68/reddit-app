import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import Post from "./Post";

const Posts = () => {
    const posts = useSelector(selectPosts);
    let counter = 0;
    return (
        <div>
            {posts && posts.map(post => {
                counter++
                return <Post post={post} counter={counter}/>
            })}
            {!posts && <p>can't find that subreddit</p>}
        </div>
    );
};

export default Posts;