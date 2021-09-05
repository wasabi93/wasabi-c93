import React, { useState, useEffect } from "react";

import home from "../../../styles/home.module.sass";
import { useDebounce } from "../../../utils/useDebounce";
import { CssEditor, HtmlEditor, JavascriptEditor } from "../../Codepen/Editors";

export default function Ex1({ ex }) {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [htmlValue, setHtmlValue] = useState(ex.html);
  const [jsValue, setJsValue] = useState(ex.js);
  const [cssValue, setCssValue] = useState(ex.css);
  const [outputValue, setOutputValue] = useState("");

  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedJs = useDebounce(jsValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);

  useEffect(() => {
    const output = `<html>
                    <style>
                    ${debouncedCss}
                    </style>
                    <body>
                    ${debouncedHtml}
                    <script type="text/javascript">
                    ${debouncedJs}
                    </script>
                    </body>
                  </html>`;
    setOutputValue(output);
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  const handleButton1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
  };

  const handleButton2 = () => {
    setButton1(false);
    setButton2(true);
    setButton3(false);
  };

  const handleButton3 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(true);
  };
  return (
    <section>
      <div className={home.sectionContainer}>
        <div className={home.metaArea}>
          <h2 className={home.sectionTittle}>
            07. RAM (Repeat, Auto, Minmax)
            <code>
              grid-template-columns: repeat(auto-fit, minmax(&#60;base&#62;,
              1fr))
            </code>
          </h2>
          <div className={home.exArea}>
            <div className={home.exContainer}>
              <iframe
                srcDoc={outputValue}
                style={{ height: "100%", width: "100%" }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>
          </div>
        </div>
        <div className={home.exSection}>
          <div className={home.supportArea}>
            <span>Current Browser Support</span>
            <ul className={home.taglist}>
              <li className={home.green}>Edge</li>
              <li className={home.green}>Firefox</li>
              <li className={home.green}>Chrome</li>
              <li className={home.green}>Safari</li>
            </ul>
          </div>
          <div className={home.codeArea}>
            <div className={home.tabArea}>
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
                JS
              </button>
            </div>
            <div className={button1 ? home.boxCode : home.none}>
              <HtmlEditor value={htmlValue} onChange={setHtmlValue} />
            </div>
            <div className={button2 ? home.boxCode : home.none}>
              <CssEditor value={cssValue} onChange={setCssValue} />
            </div>
            <div className={button3 ? home.boxCode : home.none}>
              <JavascriptEditor value={jsValue} onChange={setJsValue} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
