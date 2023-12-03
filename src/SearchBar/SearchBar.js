import React, { useState } from "react";
import { loadPosts } from "../features/Posts/postsSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const changeHandler = ({ target }) => {
        setSearch(target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(loadPosts(search));
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