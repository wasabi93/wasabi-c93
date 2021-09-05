import React, { useState, useEffect } from "react";

import home from "../../styles/home.module.sass";
import { CssEditor, HtmlEditor, JavascriptEditor, PythonEditor } from "./Editors";
import { useDebounce } from "../../utils/useDebounce";

const Codepen = () => {
  const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [pyValue, setPyValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedJs = useDebounce(jsValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);
  const debouncedPy = useDebounce(pyValue, 1000)

  useEffect(() => {
    const output = `<html>
                    <style>
                    ${debouncedCss}
                    </style>
                    <body>
                    ${debouncedHtml}
                    <script type="text/javascript">
                    ${debouncedJs}
                    ${debouncedPy}
                    </script>
                    </body>
                  </html>`;
    setOutputValue(output);
  }, [debouncedHtml, debouncedCss, debouncedJs, debouncedPy]);
  return (
    <main>
      <div className={home.codepen}>
        <div>
          <div>
            <div>
              <HtmlEditor value={htmlValue} onChange={setHtmlValue} />
            </div>
            <div>
              <CssEditor value={cssValue} onChange={setCssValue} />
            </div>
            <div>
              <JavascriptEditor value={jsValue} onChange={setJsValue} />
            </div>
            <div>
              <PythonEditor value={pyValue} onChange={setPyValue} />
            </div>
          </div>
          <div>
            <iframe
              srcDoc={outputValue}
              style={{ width: "100vh", height: "100vh", border: "0" }}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Codepen;
