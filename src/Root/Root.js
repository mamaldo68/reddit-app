import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import styles from "./Root.module.css";

const Root = () => {
    return (
        <div>
            <div  className={styles.container}>
                <h1>Reddit <span className={styles.accent}>Lite</span></h1>
                <SearchBar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Root;