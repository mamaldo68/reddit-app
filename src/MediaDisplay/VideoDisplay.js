import React from "react";

const VideoDisplay = ({ mediaContent }) => {

    if (!mediaContent || !mediaContent.src) {
        return <div>No video source provided</div>;
    }

    return (
        <div>
            <video controls autoPlay width={mediaContent.width} height={mediaContent.height}>
                <source src={mediaContent.src}/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoDisplay;
