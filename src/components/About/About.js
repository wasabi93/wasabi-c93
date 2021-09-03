import React from "react";
import Image from "next/image";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Cat from "../../../public/cat.jpg";
import profilePic from "../../../public/IMG_7616.jpg";

import home from "../../styles/home.module.sass";

export default function About() {
  return (
    <main>
      <div className={home.about}>
        <article className={home.nameImg}>
          <section className={home.name}>
            <div className={home.borderName}>
              <h2>Hello, I'm</h2>
              <h1>Le Duc Tho</h1>
              <p>Frontend Developer</p>
            </div>
          </section>
          <section className={home.Image}>
            <Image
              className={home.avatar}
              src={profilePic}
              alt=""
              layout="responsive"
            />
          </section>
        </article>
        <article className={home.introduce}>
          <div className={home.introDetails}>
            <div className={home.introContainer}>
              <div>
                <h1>Something about me</h1>
                <br />
                <p>
                  A 28 years old self-taught frontend developer who reaches the
                  advanced (very hard to expert) level in{" "}
                  <a href="https://edabit.com/challenges">edabit.com</a> within
                  a year.
                </p>
                <br />
                <p>
                  an ambitious individual that chose the self-learning route to
                  pursue a coding career with the support from{" "}
                  <a href="https://www.w3schools.com">w3schools.com</a>,{" "}
                  <a href="https://www.github.com">Github</a>,{" "}
                  <a href="https://stackoverflow.com/">Stackoverflow</a>. Also
                  completed the React JS course from Jad Joubran about building
                  a small eCommerce website using context.{" "}
                  <a href="https://react-tutorial.app/">
                    https://react-tutorial.app/
                  </a>
                </p>
                <br />
                <p></p>
                <br />
              </div>
            </div>
            <div className={home.introSkills}>
              <h1>Skills</h1>
              <br />
              <div className={home.skillsRating}>
                <ul>
                  <li>
                    <div>HTML5</div>
                    <div>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </li>
                  <li>
                    <div>Css, Js</div>
                    <div>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </div>
                  </li>
                  <li>
                    <div>ReactJS, Material-UI, sass</div>
                    <div>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </div>
                  </li>
                  <li>
                    <div>API, Axios, NextJS, Python</div>
                    <div>
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </div>
                  </li>
                  <li>
                    <div>MongoDB, ExpressJS</div>
                    <div>
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
