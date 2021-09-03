import React, { useState, useEffect } from "react";

import home from "../../styles/home.module.sass";
import { useDebounce } from "../../utils/useDebounce";
import { CssEditor, HtmlEditor, PythonEditor } from "../Codepen/Editors";

export default function ExPy({ ex, details }) {
  const [buttonIntro, setButtonIntro] = useState(true);
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [htmlValue, setHtmlValue] = useState(ex.html);
  const [cssValue, setCssValue] = useState(ex.css);
  const [pyValue, setPyValue] = useState(ex.py);
  const [outputValue, setOutputValue] = useState("");

  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);
  const debouncedPy = useDebounce(pyValue, 1000);

  useEffect(() => {
    const outputPy = `<html>
                      <style>                  
                      ${debouncedCss}
                      </style>
                      <body>
                      ${debouncedHtml}
                      <script type="text/python3">
                      ${debouncedPy}
                      </script>
                      </body>
                    </html>`;
    setOutputValue(outputPy);
  }, [debouncedHtml, debouncedCss, debouncedPy]);

  const handleButtonIntro = () => {
    setButtonIntro(true);
    setButton1(false);
    setButton2(false);
    setButton3(false);
  };

  const handleButton1 = () => {
    setButtonIntro(false);
    setButton1(true);
    setButton2(false);
    setButton3(false);
  };

  const handleButton2 = () => {
    setButtonIntro(false);
    setButton1(false);
    setButton2(true);
    setButton3(false);
  };

  const handleButton3 = () => {
    setButtonIntro(false);
    setButton1(false);
    setButton2(false);
    setButton3(true);
  };
  return (
    <section>
      <div className={home.sectionContainer}>
        <div className={home.metaArea}>
          <h2 className={home.sectionTittle}>
            {details.tittle}
            <code>{details.introduce}</code>
          </h2>
        </div>
        <div className={home.exSection}>
          <div className={home.exArea}>
            <div className={home.exContainer}>
              <iframe
                srcDoc={outputValue}
                style={{ height: "100%", width: "100%" }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>
          </div>
          <div className={home.codeArea}>
            <div className={home.tabArea}>
              <button
                onClick={handleButtonIntro}
                className={buttonIntro ? home.btnClicked : "null"}
              >
                intro
              </button>
              <button
                onClick={handleButton1}
                className={button1 ? home.btnClicked : "null"}
              >
                HTML
              </button>
              <button
                onClick={handleButton2}
                className={button2 ? home.btnClicked : "null"}
              >
                CSS
              </button>
              <button
                onClick={handleButton3}
                className={button3 ? home.btnClicked : "null"}
              >
                Python
              </button>
            </div>
            <div className={buttonIntro ? home.boxCode : home.none}>
              <textarea value={details.intro}></textarea>
            </div>
            <div className={button1 ? home.boxCode : home.none}>
              <HtmlEditor value={htmlValue} onChange={setHtmlValue} />
            </div>
            <div className={button2 ? home.boxCode : home.none}>
              <CssEditor value={cssValue} onChange={setCssValue} />
            </div>
            <div className={button3 ? home.boxCode : home.none}>
              <PythonEditor value={pyValue} onChange={setPyValue} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
