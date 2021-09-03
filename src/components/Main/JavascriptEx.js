import React from 'react'

import home from "../../styles/home.module.sass";
import ExJs from '../OneLineBody/ExJs'

export default function JavascriptEx() {
    const js1 = {
        html: ''
    }
    const details = {
        tittle: 'a'
    }
    return (
        <main>
            <div className={home.exampleContainer}>
                <h1 className={home.heading}>Javascript</h1>
                <ExJs ex={js1} details={details}/>
            </div>
        </main>
    )
}