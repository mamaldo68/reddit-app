import React from "react";
import MarkdownRenderer from "../../MarkdownRenderer/MarkDownRenderer";
import { useSelector } from "react-redux";
import { selectContents } from "./commentsSlice";

const Contents = () => {
    const contents = useSelector(selectContents);
    
    if (contents && contents.data) {
        const { title, author, url, selftext, thumbnail, domain } = contents.data;
        return (
            <div>
                <p>{title}</p>
                <p>Submitted by: {author}</p>
                {url && thumbnail !== "self" && <img src={domain === "imgur.com" ? url + ".png" : url}/>}
                {selftext && <MarkdownRenderer markdownContent={selftext}/>}
            </div>
        );
    }
};

export default Contents;