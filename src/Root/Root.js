import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h1>Reddit Lite</h1>
            <SearchBar/>
            <Outlet/>
        </div>
    );
};

export default Root;