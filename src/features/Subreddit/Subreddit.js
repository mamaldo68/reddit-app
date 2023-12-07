import React from "react";
import Posts from "../Posts/Posts";
import { loadPosts } from "../Posts/postsSlice";
import { selectSubreddit, addSortType, selectSortType } from "./subredditSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Subreddit = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const subreddit = useSelector(selectSubreddit);
    const sortType = useSelector(selectSortType);

    const clickHandler = ({ target }) => {
        if (sortType !== target.value) {
            dispatch(addSortType(target.value));
            dispatch(loadPosts({subreddit: subreddit, sortType: target.value}));
            navigate(`/r/${subreddit}/${target.value}`);
        }
    };

    const sortBar = (
        <div>
            <button type="button" onClick={clickHandler} value={"hot"}>Hot</button>
            <button type="button" onClick={clickHandler} value={"new"}>New</button>
            <button type="button" onClick={clickHandler} value={"top"}>Top</button>
        </div>
    );

    return (
        <div>
            {subreddit && <h2>r/{subreddit}</h2>}
            {sortBar}
            <Posts/>
        </div>
    );
};

export default Subreddit;