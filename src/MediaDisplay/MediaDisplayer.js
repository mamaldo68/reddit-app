import React from "react";
import ImgDisplay from "./ImgDisplay";
import VideoDisplay from "./VideoDisplay";
import YoutubeDisplay from "./YoutubeDisplay";
import GalleryDisplay from "./GalleryDisplay";

const MediaDisplayer = ({ mediaContent }) => {
    const mediaType = mediaContent.type;

    switch (mediaType) {
        case "img":
            return <ImgDisplay mediaContent={mediaContent}/>
        case "video":
            return <VideoDisplay mediaContent={mediaContent}/>
        case "youtube":
            return <YoutubeDisplay mediaContent={mediaContent}/>
        case "gallery":
            return <GalleryDisplay mediaContent={mediaContent}/>
        default:
            return null;
    }
};

export default MediaDisplayer;