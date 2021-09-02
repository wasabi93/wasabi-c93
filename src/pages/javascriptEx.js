
import React from "react";

import home from "../styles/home.module.sass";

import Header from "../components/Header/Header";
import JavascriptEx from "../components/Main/JavascriptEx";
import Footer from "../components/Footer/Footer";

function javascriptEx() {
  return (
    <div className={home.container}>
      <Header />
      <JavascriptEx />
      <Footer />
    </div>
  );
}

export default javascriptEx;
