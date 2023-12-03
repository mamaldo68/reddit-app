import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <SearchBar/>
            <Outlet/>
        </div>
    );
};

export default Root;