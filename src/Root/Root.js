import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadPosts } from "../features/Posts/postsSlice";
import { addSubreddit, addSortType } from "../features/Subreddit/subredditSlice";
import styles from "./Root.module.css";


const Root = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(addSubreddit("all"));
        dispatch(addSortType("hot"));
        dispatch(loadPosts({subreddit: "all", sortType: "hot"}));
        navigate(`r/all/hot`);
    }, []);

    const clickHandler = () => {
        dispatch(addSubreddit("all"));
        dispatch(addSortType("hot"));
        dispatch(loadPosts({subreddit: "all", sortType: "hot"}));
        navigate(`r/all/hot`);
    };

    return (
        <div>
            <div  className={styles.container}>
                <div className={styles.clickable} onClick={clickHandler}><h1>Reddit <span className={styles.accent}>Lite</span></h1></div>
                <SearchBar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Root;