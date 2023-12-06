export const decodeUrl = (imgUrl) => {
    return imgUrl.replace(/amp;v/g, 'v').replace(/amp;/g, '').replace(/amp;s/g, 's');
};
  
export const checkMediaType = (post) => {
    let mediaType = "";
    if (post.data.is_self && post.data.thumbnail === "self") {
        mediaType = "text";
    } else if (post.data.is_gallery) {
        mediaType = "gallery";
    } else if (post.data.is_video) {
        mediaType = "video";
    } else if (post.data.domain === "youtu.be") {
        mediaType = "youtube";
    } else if (post.data.preview) {
        mediaType = "img";
    } else {
        mediaType = "Unknown";
    }

    return mediaType;
};

export const getMediaContent = (post) => {
    const mediaType = checkMediaType(post);
    const mediaContent = {
        type: mediaType,
    };

    switch (mediaType) {
        case "text":
            return mediaContent;
        case "gallery":
            const getOrder = Object.entries(post.data.gallery_data.items).map(item => item[1].media_id);
            mediaContent["gallery_data"] = getOrder.map(media_id => {
                const getResolutions = post.data.media_metadata[media_id].p;
                const getImg = getResolutions[getResolutions.length - 1];
                return {
                    src: decodeUrl(getImg.u),
                    width: getImg.x,
                    height: getImg.y,
                    id: media_id,
                };
            });
            return mediaContent;
        case "video":
            mediaContent["width"] = post.data.secure_media.reddit_video.width;
            mediaContent["height"] = post.data.secure_media.reddit_video.height;
            mediaContent["src"] = post.data.secure_media.reddit_video.fallback_url;
            return mediaContent;
        case "youtube":
            return mediaContent;
        case "img":
            const getResolutions = post.data.preview.images[0].resolutions;
            const getImg = getResolutions[getResolutions.length - 1];
            mediaContent["src"] = decodeUrl(getImg.url);
            mediaContent["width"] = getImg.width;
            mediaContent["height"] = getImg.height;
            return mediaContent;
        default:
            console.log("Unkknown mediaType");
    }
};