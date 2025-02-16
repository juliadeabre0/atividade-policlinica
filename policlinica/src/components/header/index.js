'use client'
import React from "react"
import Link from "next/link"
import style from "./header.module.css"

export default function Header() {
    return (
        <div className={style.conteudoheader}>
            <ul className={style.ulopocoesprincipais}>
                <li className={style.opcao}><Link href="/" className={style.linkMenu}>Home</Link></li>

                <li className={style.opcao}><Link href="#" className={style.linkMenu}>Médico</Link>
                    <ul className={style.opcaoessubmenu}>
                        <li><Link href="medico" className={style.linkSubMenu}>Listar Registro</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Buscar</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Adicionar novo</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Editar</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Excluir</Link></li>
                    </ul>
                </li>

                <li className={style.opcao}><Link href="#" className={style.linkMenu}>Paciente</Link>
                    <ul className={style.opcaoessubmenu}>
                        <li><Link href="paciente" className={style.linkSubMenu}>Listar Registro</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Buscar</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Adicionar novo</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Editar</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Excluir</Link></li>
                    </ul>
                </li>
                <li className={style.opcao}><Link href="#" className={style.linkMenu}>Consulta</Link>
                    <ul className={style.opcaoessubmenu}>
                        <li><Link href="consulta" className={style.linkSubMenu}>Listar consultas</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Agendar consulta</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Editar consulta</Link></li>
                        <li><Link href="#" className={style.linkSubMenu}>Cancelar</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}