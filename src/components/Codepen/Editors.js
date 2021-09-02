import React from "react";
import dynamic from 'next/dynamic'

const AceEditor = dynamic(() => import('react-ace'),{ ssr: false });

import home from "../../styles/home.module.sass";

export const JavascriptEditor = (props) => {
  return <Editor mode="javascript" {...props} />;
};

export const HtmlEditor = (props) => {
  return <Editor mode="html" {...props} />;
};

export const CssEditor = (props) => {
  return <Editor mode="css" {...props} />;
};

export const PythonEditor = (props) => {
  return <Editor mode='python' {...props} />
}

const Editor = ({ mode, title, onChange, value }) => {
  
  return (
    <div className={home.editorContainer}>
      <div className={home.editorTitle}>{title}</div>
      <AceEditor
        mode={mode}
        name={title}
        fontSize={18}
        width={"100%"}
        showPrintMargin={true}
        showGutter={true}
        tabSize={2}
        onChange={onChange}
        value={value}
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};
