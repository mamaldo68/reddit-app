import React from "react";
import { useSelector } from "react-redux";
import { selectContents } from "./commentsSlice";

const Contents = () => {
    const contents = useSelector(selectContents);
    const { title, author, url } = contents.data;
    if (contents && contents.data) {
        return (
            <div>
                <p>{title}</p>
                <p>Submitted by: {author}</p>
                <img src={url}/>
            </div>
        );
    }
};

export default Contents;