import React from "react";
import Posts from "../Posts/Posts";
import { loadPosts } from "../Posts/postsSlice";
import { selectSubreddit, addSortType, selectSortType } from "./subredditSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Subreddit.module.css";


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
        <div className={styles.container}>
            {subreddit && <h2 className={styles.r}>r/<span className={styles.subreddit}>{subreddit}</span></h2>}
            <button className={sortType === "hot" ? `${styles.activeButton} ${styles.button}` : styles.button} type="button" onClick={clickHandler} value={"hot"}>Hot</button>
            <button className={sortType === "new" ? `${styles.activeButton} ${styles.button}` : styles.button} type="button" onClick={clickHandler} value={"new"}>New</button>
            <button className={sortType === "top" ? `${styles.activeButton} ${styles.button}` : styles.button} type="button" onClick={clickHandler} value={"top"}>Top</button>
        </div>
    );

    return (
        <div>
            {sortBar}
            <Posts/>
        </div>
    );
};

export default Subreddit;