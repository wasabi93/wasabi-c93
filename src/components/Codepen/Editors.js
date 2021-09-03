import React from "react";
import dynamic from 'next/dynamic'

const AceEditor = dynamic( 
  async () => {
    const ace = await import('react-ace');
    require('ace-builds/src-min-noconflict/mode-css')
    require('ace-builds/src-min-noconflict/mode-html')
    require('ace-builds/src-min-noconflict/mode-python')
    require('ace-builds/src-min-noconflict/mode-javascript')
    return ace;
}, {
  loading: () => (
    <>Loading...</>
  ),
  ssr: false,
}
)

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
      <AceEditor
        mode={mode}
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
