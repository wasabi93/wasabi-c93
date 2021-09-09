import React from 'react'
import Head from 'next/head'

import home from '../styles/home.module.sass'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <div className={home.container}>
            <Head>
                <title>Home</title>
            </Head>
            <Header />
            <About />
            <Footer />
        </div>
    )
}

export default Home