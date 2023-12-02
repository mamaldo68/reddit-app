import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import Post from "./Post";

const Posts = () => {
    const posts = useSelector(selectPosts);
    console.log(posts);
    return (
        <div>
            {posts && posts.map(post => <Post post={post}/>)}
        </div>
    );
};

export default Posts;