import React from "react";

const YoutubeDisplay = ({ mediaContent }) => {
  if (!mediaContent || !mediaContent.src) {
    return <div>No YouTube video source provided</div>;
  }

  const { width, height, src } = mediaContent;

  return (
    <div>
      <iframe
        title="YouTube Video"
        style={{ margin: 0, padding: 0, width: mediaContent.width, height: mediaContent.height + 4}}
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeDisplay;
