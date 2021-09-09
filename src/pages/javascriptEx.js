import React from "react";

import home from "../styles/home.module.sass";
import Head from 'next/head'

import Header from "../components/Header/Header";
import JavascriptEx from "../components/Main/JavascriptEx";
import Footer from "../components/Footer/Footer";

function javascriptEx() {
  return (
    <div className={home.container}>
      <Head>
        <title>JS</title>
      </Head>
      <Header />
      <JavascriptEx />
      <Footer />
    </div>
  );
}

export default javascriptEx;
