import { useState } from "react";

import Editor from "@monaco-editor/react"; // Code editor component from VSCode

// We pass in 4 props to the component:
//  the function to call whenever we type a character
//  the coding language
//  the initial code to display
//  the theme to use
const CodeEditorWindow = ({ onChange, language, code, theme ,inputStatu,setCode}) => {


  const handleEditorChange = (value) => {
      setCode(()=>value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="55vh"
        width={`100%`}
        language={language || "python"}
        value={code}
        theme={theme}
        defaultValue="# some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
