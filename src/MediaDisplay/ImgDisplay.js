import React from "react";
import styles from "./ImgDisplay.module.css";

const ImgDisplay = ({ mediaContent }) => {
    return (
        <div>
            <img className={styles.img} src={mediaContent.src} width={mediaContent.width} height={mediaContent.height} alt="Main content image"/>
        </div>
    );
};

export default ImgDisplay;