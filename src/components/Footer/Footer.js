import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <p style= {{paddingRight: '0.5em'}}>
                    Contact me via wasabi.c93@gmail.com
                </p>
                <Link href='https://github.com/wasabi93'>
                    <a style={{fontSize:'1.5em'}}>
                        <AiFillGithub />
                    </a>
                </Link>
            </div>
        </footer>
    )
}