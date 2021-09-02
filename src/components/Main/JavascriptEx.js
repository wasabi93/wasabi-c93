import React from 'react'

import home from "../../styles/home.module.sass";
import Ex from '../OneLineBody/Ex/Ex'

export default function JavascriptEx() {
    const js1 = {
        html: ''
    }
    const details = {
        tittle: 'a'
    }
    return (
        <main>
            <Ex ex={js1} details={details}/>
        </main>
    )
}