import React from "react";
import MarkdownRenderer from "../../MarkdownRenderer/MarkDownRenderer";

const Comment = ({comment}) => {
    const { author, body, replies, depth } = comment.data;

    

    const commentStyle = {
        marginLeft: depth > 0 ? `25px` : "0",
        borderLeft: depth > 0 ? "1px solid #ccc" : "none",
        padding: depth > 0 ? "5px" : "0",
    };
    return (
        <div style={commentStyle}>
            <p>{author}</p>
            <MarkdownRenderer markdownContent={body}/>
            {replies && replies.data.children.map(comment => <Comment comment={comment}/> )}
        </div>
        
    );
};

export default Comment;