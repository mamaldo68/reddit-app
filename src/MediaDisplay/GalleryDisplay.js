import React, { useState } from "react";
import styles from "./GalleryDisplay.module.css";

const GalleryDisplay = ({ mediaContent }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let currentImg = mediaContent.gallery_data[currentIndex];

    const prevHandler = () => {
        setCurrentIndex(prev => (currentIndex === 0) ? mediaContent.gallery_data.length - 1 : prev - 1);
    };

    const nextHandler = () => {
        setCurrentIndex(prev => (currentIndex < mediaContent.gallery_data.length -1) ? prev + 1 : 0);
    };
    
    return (
        <div>
            <div className={styles.container}>
                <button className={styles.button} type="button" onClick={prevHandler}>{"<"}</button>
                <p>{currentIndex + 1} / {mediaContent.gallery_data.length}</p>
                <button className={styles.button} type="button" onClick={nextHandler}>{">"}</button>
            </div>
            <br/>
            <img className={styles.img} src={currentImg.src} width={currentImg.width} height={currentImg.height}/>
        </div>
    );
};

export default GalleryDisplay;