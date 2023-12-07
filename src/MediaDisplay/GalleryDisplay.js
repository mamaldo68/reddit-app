import React, { useState } from "react";

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
            <button type="button" onClick={prevHandler}>Prev</button>
            <button type="button" onClick={nextHandler}>Next</button>
            <img src={currentImg.src} width={currentImg.width} height={currentImg.height}/>
        </div>
    );
};

export default GalleryDisplay;