import React, { useState } from "react";
import { loadPosts } from "../features/Posts/postsSlice";
import { addSubreddit, selectSubreddit, selectSortType } from "../features/Subreddit/subredditSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const sortType = useSelector(selectSortType);
   

    const changeHandler = ({ target }) => {
        setSearch(target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(addSubreddit(search));
        dispatch(loadPosts({subreddit: search, sortType: sortType}));
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;