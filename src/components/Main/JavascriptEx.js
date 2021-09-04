import React from 'react'

import home from "../../styles/home.module.sass";
import ExJs from '../OneLineBody/ExJs'

export default function JavascriptEx() {
    const js1 = [{
        tittle: 'cuttingGrass',
        introduce: 'lets cut all the grass',
        intro: `// cuttingGrass([3, 4, 4, 4], 1, 1, 1) ➞ [[2, 3, 3, 3], [1, 2, 2, 2], "Done"]

        // 1st cut shaves off 1: [3, 4, 4, 4] ➞ [2, 3, 3, 3]
        // 2nd cut shaves off 1: [2, 3, 3, 3] ➞ [1, 2, 2, 2]
        // 3rd cut shaves off 1: [1, 2, 2, 2] ➞ [0, 1, 1, 1], but one element reached zero so we return "Done".`,
        html: `<div id='test'></div>`,
        css: ``,
        js: `
        function cuttingGrass(arr, ...cuts) {
            const cut = (a, l) => a.map(v => v - l);
            const isCut = a => a.some(v => v < 1) ? "Done" : a;
            return document.getElementById('test').innerHTML = cuts.map(v => isCut(arr = cut(arr, v)));
        }
        cuttingGrass([3, 4, 4, 4], 1, 1, 1)
        `,
    }]
    return (
        <main>
            <div className={home.exampleContainer}>
                <h1 className={home.heading}>Javascript</h1>
                <ExJs ex={js1[0]}/>
            </div>
        </main>
    )
}