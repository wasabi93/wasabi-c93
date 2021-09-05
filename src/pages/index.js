import React from 'react'

import home from '../styles/home.module.sass'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <div className={home.container}>
            <Header />
            <About />
            <Footer />
        </div>
    )
}

export default Home