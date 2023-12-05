import React from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { selectContents } from "./commentsSlice";

const Contents = () => {
    const contents = useSelector(selectContents);
    const formattedText = (rawText) => {
        return <ReactMarkdown>{rawText}</ReactMarkdown>;
    };
    
    if (contents && contents.data) {
        const { title, author, url, selftext, thumbnail} = contents.data;
        return (
            <div>
                <p>{title}</p>
                <p>Submitted by: {author}</p>
                {url && thumbnail !== "self" && <img src={url}/>}
                {selftext && <p>{formattedText(selftext)}</p>}
            </div>
        );
    }
};

export default Contents;