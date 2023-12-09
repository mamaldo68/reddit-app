import React, { useState } from "react";
import { loadPosts } from "../features/Posts/postsSlice";
import { addSubreddit, selectSortType } from "../features/Subreddit/subredditSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const sortType = useSelector(selectSortType);
    const navigate = useNavigate();
   

    const changeHandler = ({ target }) => {
        setSearch(target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(addSubreddit(search));
        dispatch(loadPosts({subreddit: search, sortType: sortType}));
        navigate(`r/${search}/${sortType}`);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <input className={styles.input} onChange={changeHandler} type="text" value={search} placeholder="subreddit"/>
                <button className={styles.button} type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;