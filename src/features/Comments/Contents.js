import React from "react";
import MarkdownRenderer from "../../MarkdownRenderer/MarkDownRenderer";
import { useSelector } from "react-redux";
import { selectContents } from "./commentsSlice";
import MediaDisplayer from "../../MediaDisplay/MediaDisplayer";
import { getMediaContent } from "../../util/mediaHelperFunctions";
import Post from "../Posts/Post";
import styles from "./Contents.module.css";


const Contents = () => {
    const contents = useSelector(selectContents);
    
    if (contents && contents.data) {
        const mediaContent = getMediaContent(contents);
        const { selftext } = contents.data;
        return (
            <div>
                <Post post={contents} counter={1}/>
                <div  className={styles.container}>
                    <MediaDisplayer mediaContent={mediaContent} />
                    {selftext && <MarkdownRenderer markdownContent={selftext}/>}
                </div>
            </div>
        );
    }
};

export default Contents;