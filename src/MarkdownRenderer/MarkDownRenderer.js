import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MarkdownRenderer = ({ markdownContent }) => {
  const transformText = (text, index) => {
    if (typeof text === 'string') {
      // Check if the text contains a valid image URL
      const imageUrlMatch = text.match(/https?:\/\/[^\s]+/);

      if (imageUrlMatch) {
        const imageUrl = imageUrlMatch[0];
        return <img key={index} src={imageUrl} alt="Image" style={{ maxWidth: "100%" }} />;
      }
    }

    return text;
  };

  const components = {
    p: ({ children, ...props }) => (
      <p {...props}>{React.Children.map(children, (child, index) => transformText(child, index))}</p>
    ),
  };

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
      {markdownContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
