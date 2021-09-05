import React from 'react'

import home from "../../styles/home.module.sass";
import ExPy from '../OneLineBody/ExPy'

export default function PythonEx() {
    const js1 = {
        html: ''
    }
    const details = {
        tittle: 'aaaaaa',
        introduce: 'bbbbbb'
    }
    return (
        <main>
            <div className={home.exampleContainer}>
                <h1 className={home.heading}>Python</h1>
                <p>Trying to display python output in HTML</p>
                <ExPy ex={js1} details={details}/>
            </div>
        </main>
    )
}