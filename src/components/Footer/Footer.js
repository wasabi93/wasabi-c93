import Link from 'next/Link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer>
            <div style={{display: "flex", justifyContent: 'space-around'}}>
                <p>
                    Contact me via wasabi.c93@gmail.com
                </p>
                <Link href='https://github.com/wasabi93'>
                    <a>
                        <AiFillGithub />
                    </a>
                </Link>
            </div>
        </footer>
    )
}