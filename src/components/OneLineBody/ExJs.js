import React, { useState, useEffect } from "react";

import home from "../../styles/home.module.sass";
import { useDebounce } from "../../utils/useDebounce";
import { CssEditor, HtmlEditor, JavascriptEditor } from "../Codepen/Editors";

export default function ExJs({ ex }) {
  const [buttonIntro, setButtonIntro] = useState(true)
  const [button1, setButton1] = useState(false);
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
    const outputJs = `<html>
                    <style>
                    ${debouncedCss}
                    </style>
                    <body>
                    <div id='log'></div>
                    ${debouncedHtml}
                    <script type="text/javascript">
                    (function () {
                      var old = console.log;
                      var logger = document.getElementById('log');
                      console.log = function () {
                        for (var i = 0; i < arguments.length; i++) {
                          if (typeof arguments[i] == 'object') {
                              logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
                          } else {
                              logger.innerHTML += arguments[i] + '<br />';
                          }
                        }
                      }
                    })();
                    ${debouncedJs}
                    </script>
                    </body>
                  </html>`;
    setOutputValue(outputJs);
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  const handleButtonIntro = () => {
    setButtonIntro(true);
    setButton1(false)
    setButton2(false);
    setButton3(false);
  }
  
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
            {ex.tittle}
            <code>{ex.introduce}</code>
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
                className={buttonIntro ? home.btnClicked : 'null'}
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
                JS
              </button>
            </div>
            <div className={buttonIntro ? home.boxCode : home.none}>
              <textarea value={ex.intro}></textarea>
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
