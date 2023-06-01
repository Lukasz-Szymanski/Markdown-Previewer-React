import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./style.css";

const MarkdownPreveiwer = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const defatultMarkdown = `
# Heading 1 

## Heading 2 
      
### Heading 3 
      
#### Heading 4 
      
##### Heading 5 

[Link example](https://www.example.com)

**Bolded text**

      `;

    setMarkdown(defatultMarkdown);
  }, []);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownHTML = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="root">
      <textarea id="editor" value={markdown} onChange={handleChange} />

      <div id="preview" dangerouslySetInnerHTML={getMarkdownHTML()} />
    </div>
  );
};

export default MarkdownPreveiwer;
