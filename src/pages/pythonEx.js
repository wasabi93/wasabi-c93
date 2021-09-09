import React from "react";
import Head from 'next/head'

import home from "../styles/home.module.sass";

import Header from "../components/Header/Header";
import PythonEx from "../components/Main/PythonEx";
import Footer from "../components/Footer/Footer";

function pythonEx() {
  return (
    <div className={home.container}>
      <Head>
        <title>Python</title>
      </Head>
      <Header />
      <PythonEx />
      <Footer />
    </div>
  );
}

export default pythonEx;
