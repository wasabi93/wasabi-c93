import React from "react";
import Head from 'next/head'

import home from "../styles/home.module.sass";

import Header from "../components/Header/Header";
import OneLineBody from "../components/OneLineBody/OneLineBody";
import Footer from "../components/Footer/Footer";

function OneLine() {
  return (
    <div className={home.container}>
      <Head>
        <title>OneLine</title>
      </Head>
      <Header />
      <OneLineBody />
      <Footer />
    </div>
  );
}

export default OneLine;
