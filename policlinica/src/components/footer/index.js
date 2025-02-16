'use client'
import React from "react"
import Link from "next/link"
import style from "./footer.module.css"

export default function Footer() {
    return (
        <div className={style.footer}>
            <p>VitaCare. Direitos reservados &copy; 2025</p>
        </div>
    )
}