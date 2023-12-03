import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import Post from "./Post";

const Posts = () => {
    const posts = useSelector(selectPosts);
    return (
        <div>
            {posts && posts.map(post => <Post post={post}/>)}
            {!posts && <p>can't find that subreddit</p>}
        </div>
    );
};

export default Posts;