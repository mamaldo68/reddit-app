import React from "react";

const ImgDisplay = ({ mediaContent }) => {
    return (
        <div>
            <img src={mediaContent.src} width={mediaContent.width} height={mediaContent.height}/>
        </div>
    );
};

export default ImgDisplay;