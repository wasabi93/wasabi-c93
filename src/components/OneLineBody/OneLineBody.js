import React from "react";

import home from "../../styles/home.module.sass";
import Ex1 from "./Ex/Ex1";
import Ex2 from "./Ex/Ex2";
import Ex3 from "./Ex/Ex3";
import Ex4 from "./Ex/Ex4";
import Ex5 from "./Ex/Ex5";
import Ex6 from "./Ex/Ex6";
import Ex7 from "./Ex/Ex7";
import Ex8 from "./Ex/Ex8";
import Ex9 from "./Ex/Ex9";
import Ex10 from "./Ex/Ex10";

export default function OneLineBody() {
  const ex1 = {
    html: `
    <div class='parent'>
      <div class='box'>
        :)
      </div>
    </div>`,
    css: `
    .parent {
      display: grid;
      place-items: center;
      height: 96vh;
      background-color: hsl(187deg 61% 79%);
    }
    
    .box {
      background-color: hsl(23deg 83% 82%);
      padding: 1em;
      border-radius: 25%;
    }
    `,
    js: ``,
  };
  const ex2 = {
    html: `
    <div class="parent white">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
    `,
    css: `
    .parent {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 96vh;
    }

    .box {
      background-color: hsl(100deg 64% 86%);
      padding: 5em;
      margin: 0.5em;
      border-radius: 10%;
      display: grid;
      place-items: center;
    }
    `,
    js: ``,
  };
  const ex3 = {
    html: `  
    <div class="parent">
      <section contenteditable class='yellow'>
        Min: 150px / Max: 25%
      </section>
      <section contenteditable class='purple'>
        This element takes the second grid position (1fr), meaning
        it takes up the rest of the remaining space.
      </section>
    </div>
    `,
    css: `
    section {
      font-size: 1.5em;
      padding: 0.5em;
    }

    .parent {
      height: 96vh;
      display: grid;
      grid-template-columns: minmax(150px, 25%) 1fr;
    }

    .yellow {
      background-color: hsl(42deg 97% 85%);
    }

    .purple {
      background-color: hsl(282deg 24% 86%);
    }
    `,
    js: ``,
  };
  const ex4 = {
    html: `
    <div class="parent">
      <header class="section" contenteditable>Header</header>
      <main class="section" contenteditable>Main</main>
      <footer class="section" contenteditable>Footer Content</footer>
    </div>
    `,
    css: `
    .parent {
      display: grid;
      height: 96vh;
      grid-template-rows: auto 1fr auto;
    }

    .section {
      font-size: 1.5em;
      padding: 0.5em;
    }

    header {
      background-color: hsl(187deg 61% 79%);
    }

    main {
      background-color: hsl(23deg 83% 82%);
    }

    footer {
      background-color: hsl(282deg 24% 86%);
    }    
    `,
    js: ``,
  };
  const ex5 = {
    html: `
    <div class="parent">
      <header class="section">Header</header>
      <div class="left-side section" contenteditable>Left Sidebar</div>
      <main class="section " contenteditable> Main Content</main>
      <div class="right-side section" contenteditable>Right Sidebar</div>
      <footer class="section">Footer</footer>
    </div>
    `,
    css: `
    .parent {
      height: 96vh;
      display: grid;
      grid-template: auto 1fr auto / auto 1fr auto;
    }
    
    header {
      padding: 2rem;
      grid-column: 1 / 4;
      background-color: hsl(335deg 52% 92%);
    }
    
    .left-side {
      grid-column: 1 / 2;
      background-color: hsl(282deg 24% 86%);
    }
    
    main {
      grid-column: 2 / 3;
      background-color: hsl(23deg 83% 82%);
    }
    
    .right-side {
      grid-column: 3 / 4;
      background-color: hsl(282deg 24% 86%);
    }

    footer {
      grid-column: 1 / 4;
      background-color: hsl(99deg 64% 86%);
    }
    
    .section {
      padding: 0.5em;
      font-size: 1.5em;
    }
    `,
    js: ``,
  };
  const ex6 = {
    html: `
    <div class="parent">
      <div class="span-12 section">Span 12</div>
      <div class="span-6 section">Span 6</div>
      <div class="span-4 section">Span 4</div>
      <div class="span-2 section">Span 2</div>
    </div>
    `,
    css: `
    .parent {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      height: 96vh;
    }
      
    .span-12 {
      grid-column: 1 / span 12;
      background-color: hsl(100deg 64% 86%);
    }
    
    .span-6 {
      grid-column: 1 / span 6;
      background-color: hsl(23deg 83% 82%);
    }
    
    .span-4 {
      grid-column: 4 / span 4;
      background-color: hsl(282deg 24% 86%);
    }
    
    .span-2 {
      grid-column: 3 / span 2;
      background-color: hsl(42deg 97% 85%);
    }
    
      /* centering text */
    .section {
      font-size: 1.5em;
      padding: 0.5em;
      display: grid;
      place-items: center;
      text-align: center
    }
    `,
    js: ``,
  };
  const ex7 = {
    html: `
    <div class="parent">
      <div class="box pink">1</div>
      <div class="box purple">2</div>
      <div class="box blue">3</div>
      <div class="box green">4</div>
    </div>
    `,
    css: `
    .parent {
      height: 96vh;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
    
    .box {
      padding: 0.5em;
      font-size: 1.5em;
      display: grid;
      place-items: center;
      border-radius: 5%;
    }
    
    .pink {
      background-color: hsl(335deg 52% 92%);  
    }
    
    .purple {
      background-color: hsl(282deg 24% 86%);  
    }
    
    .blue {
      background-color: hsl(187deg 61% 79%);  
    }
    
    .green {
      background-color: hsl(187deg 61% 79%);  
    }
    `,
    js: ``,
  };
  const ex8 = {
    html: `
    <div class="container">
      <div class='parent'>
        <div class="card">
          <h3>Title - Card 1</h3>
          <p contenteditable>Medium length description with a few more words here.</p>
          <div class="visual pink"></div>
        </div>
        <div class="card">
          <h3>Title - Card 2</h3>
          <p contenteditable>Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div class="visual blue"></div>
        </div>
        <div class="card">
          <h3>Title - Card 3</h3>
          <p contenteditable>Short Description.</p>
          <div class="visual green"></div>
        </div>
      </div>
    </div>
    `,
    css: `
    .container {
      display: grid;
      height: 96vh;
      place-items: center;
    }

    .parent {
      font-family: system-ui, sans-serif;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
    }
    
    .visual {
      height: 100px;
      width: 100%;
      background: wheat;
      margin: 0.5rem 0;
    }
    
    .card {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 1rem;
      background-color: hsl(42deg 97% 85%);
    }
    
    h3 {
      margin: 0
    }
    
    .pink {
      background-color: hsl(335deg 52% 92%);
    }
    
    .blue {
      background-color: hsl(187deg 61% 79%);
    }
    
    .green {
      background-color: hsl(99deg 64% 86%);
    }    
    
    `,
    js: ``,
  };
  const ex9 = {
    html: `
    <div class="parent">
      <div class="card">
        <h1>Title Here</h1>
        <div class="visual"></div>
        <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
      </div>
    </div>
    `,
    css: `
    .parent {
      display: grid;
      height: 96vh;
      place-items: center;
    }
    
    .card {
      width: clamp(23ch, 50%, 46ch);
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background-color: hsl(283deg 24% 86%);
    }
    
    .visual {
      height: 125px;
      width: 100%;
      background-color: hsl(42deg 97% 85%);
    }
    `,
    js: ``,
  };
  const ex10 = {
    html: `
    <div class="parent">
      <div class="card">
        <h1>Video Title</h1>
        <div class="visual"></div>
        <p>Descriptive Text. This demo works in Chromium 84+.</p>
      </div>
    </div>
    `,
    css: `
    .parent {
      display: grid;
      height: 96vh;
      place-items: center;
    }
    
    .visual {
      aspect-ratio: 16/9;
      background-color: hsl(99deg 64% 86%);
    }
    
    .card {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background-color: hsl(187deg 61% 79%);
    }
    `,
    js: ``,
  };

  return (
    <main>
      <div className={home.oneLine}>
        <div className={home.meta}>
          <p style={{ backgroundColor: "yellow" }}>
            I remake this website from{" "}
            <a href="https://1linelayouts.glitch.me//">
              https://1linelayouts.glitch.me/
            </a>
          </p>
          <h1>1-Line Layouts*</h1>
          <p>
            *10 Modern CSS layout and sizing techniques that highlight just how
            robust and impactful a single-line of styling code can be.
            <a href="https://www.youtube.com/watch?v=qm0IfG1GyZU">
              [Watch the Video]
            </a>
          </p>
        </div>
        <div className={home.allSectionContainer}>
          <Ex1 ex={ex1} />
          <Ex2 ex={ex2} />
          <Ex3 ex={ex3} />
          <Ex4 ex={ex4} />
          <Ex5 ex={ex5} />
          <Ex6 ex={ex6} />
          <Ex7 ex={ex7} />
          <Ex8 ex={ex8} />
          <Ex9 ex={ex9} />
          <Ex10 ex={ex10} />
        </div>
      </div>
    </main>
  );
}
