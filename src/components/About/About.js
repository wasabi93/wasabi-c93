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
            <h2>Hello, I'm</h2>
            <h1>Le Duc Tho</h1>
            <p>Frontend Developer</p>
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
                  My name is Lê Đức Thọ. I am 28 years old. I grew up in Ho Chi
                  Minh city, but I have been moving to Da Nang for a few months
                  ago.
                </p>
                <br />
                <p>
                  Literally, I started to having fun with code a year ago after
                  practiced javascript in{" "}
                  <a
                    href="https://edabit.com/challenges"
                    style={{ color: "yellow" }}
                  >
                    edabit.com
                  </a>{" "}
                  with a hard - very hard level.
                </p>
                <br />
                <p>
                  I was complete the React JS course from Jad Joubran about
                  building a small eCommerce website using context.{" "}
                  <a
                    href="https://react-tutorial.app/"
                    style={{ color: "yellow" }}
                  >
                    https://react-tutorial.app/
                  </a>
                </p>
                <br />
                <p>
                  And ofcourse everything about js, css, html from{" "}
                  <a
                    style={{ color: "yellow" }}
                    href="https://www.w3schools.com"
                  >
                    w3schools.com
                  </a>
                </p>
                <br />
              </div>
            </div>
            <div className={home.introSkills}>
              <h1>Skills</h1>
              <br/>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 70%",
                }}
              >
                <div>
                  <ul style={{ lineHeight: "1.3" }}>
                    <li>HTML5</li>
                    <li>Css, Js</li>
                    <li>ReactJS, Material-UI, sass</li>
                    <li>API, Axios, NextJS</li>
                    <li>MongoDB, ExpressJS</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </li>
                    <li>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </li>
                    <li>
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </li>
                    <li>
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
