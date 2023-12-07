import React from "react";
import MarkdownRenderer from "../../MarkdownRenderer/MarkDownRenderer";
import { useSelector } from "react-redux";
import { selectContents } from "./commentsSlice";
import MediaDisplayer from "../../MediaDisplay/MediaDisplayer";
import { getMediaContent } from "../../util/mediaHelperFunctions";


const Contents = () => {
    const contents = useSelector(selectContents);
    
    if (contents && contents.data) {
        const mediaContent = getMediaContent(contents);
        const { title, author, selftext } = contents.data;
        return (
            <div>
                <p>{title}</p>
                <p>Submitted by: {author}</p>
                <MediaDisplayer mediaContent={mediaContent} />
                {selftext && <MarkdownRenderer markdownContent={selftext}/>}
            </div>
        );
    }
};

export default Contents;