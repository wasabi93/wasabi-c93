import Link from "next/link";
import React from "react";

import home from "../../styles/home.module.sass";

import { AiFillGithub } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <span>Logo</span>
          </a>
        </Link>
      </div>
      <div className={home.dropdown}>
        <button className={home.buttonMenu}>
          <FiMenu />
        </button>
        <div className={home.dropdownContent}>
          <ul>
            <li>
              <Link href="/" replace>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/oneLine" replace>
                <a>1-Line Layouts</a>
              </Link>
            </li>
            <li>
              <Link href="/javascriptEx">
                <a>Javascript</a>
              </Link>
            </li>
            <li>
              <Link href="pythonEx">
                <a>Python</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/wasabi93">
                <a>
                  <AiFillGithub />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
