import React from "react";
import Image from "next/image";

import wasabi1 from "../../../public/wasabi1.svg";
import wasabi2 from "../../../public/wasabi2.svg";
import redDot from "../../../public/redDot.svg";

import home from "../../styles/home.module.sass";

export default function About() {
  return (
    <main>
      <div className={home.about}>
        <article className={home.nameImg}>
          <section className={home.name}>
            <div className={home.borderName}>
              <h2>hello, it's</h2>
              <h1>LE DUC THO</h1>
              <div className={home.div1}>
                <p className={home.p1}>"</p>
                <p className={home.p2}>frontend Developer</p>
              </div>
            </div>
          </section>
          <section className={home.Image}>
            <Image src={wasabi1} alt="" layout="responsive" />
          </section>
        </article>
        <article className={home.introduce}>
          <div className={home.introContainer}>
            <section className={home.introHeader}>
              <div>
                <div className={home.introHeaderImage}>
                  <Image
                    src={redDot}
                    alt=""
                    layout="responsive"
                  />
                </div>
                <h1>
                  About me
                </h1>
              </div>
              <p>
                A 28 years old self-taught frontend developer who is
                enthusiastic and eager to learn and gain more experience in
                coding field.
              </p>
            </section>
            <section className={home.introBody}>
              <div className={home.introLeft}>
                <Image src={wasabi2} alt="" layout="responsive" />
              </div>
              <div className={home.introRight}>
                <div className={home.introDetails}>
                  <div className={home.lineDetails}>
                    <div className={home.lineBg}>
                      <p>1</p>
                    </div>
                    <p>
                      Reaches the advanced (very hard to expert) level in{" "}
                      <a href="https://edabit.com/challenges">edabit.com</a>{" "}
                      within a year.
                    </p>
                  </div>
                  <div className={home.lineDetails}>
                    <div className={home.lineBg}>
                      <p>2</p>
                    </div>
                    <p>
                      Completed the React JS course from Jad Joubran about
                      building a small eCommerce website using context.{" "}
                      <a href="https://react-tutorial.app/">
                        https://react-tutorial.app/
                      </a>
                    </p>
                  </div>
                  <div className={home.lineDetails}>
                    <div className={home.lineBg}>
                      <p>3</p>
                    </div>
                    <p>
                      Self-learning from the basics to advance knowledge of js,
                      css, html on{" "}
                      <a href="https://www.w3schools.com">w3schools.com</a>,{" "}
                      <a href="https://www.github.com">Github</a>,{" "}
                      <a href="https://stackoverflow.com/">Stackoverflow</a>
                    </p>
                  </div>
                </div>
                <div className={home.introSkills}>
                  <h1>Skills</h1>
                  <br />
                  <div className={home.skillsRating}>
                    <ul>
                      <li>
                        <div>HTML5</div>
                        <div></div>
                      </li>
                      <li>
                        <div>Css, Js</div>
                        <div></div>
                      </li>
                      <li>
                        <div>ReactJS, Material-UI, sass</div>
                        <div></div>
                      </li>
                      <li>
                        <div>API, Axios, NextJS, Python</div>
                        <div></div>
                      </li>
                      <li>
                        <div>MongoDB, ExpressJS</div>
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
