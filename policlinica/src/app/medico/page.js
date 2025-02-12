'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import style from "./medico.module.css"

export default function medicos() {
    const [pegarDados, setDados] = useState([])

    async function executarDados() {
        const valores = await fetch('https://api-clinica-2a.onrender.com/medicos')
        const data = await valores.json()
        setDados(data)
    }

    useEffect(() => {
        executarDados();
    }, []);

    return (
        <div className="divpai">
            <table className="tabela">
                <thead className="cabecatabela">
                    <tr key="1" className="linhacabeca">
                        <th>
                            ID</th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Telefone
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Especialidade
                        </th>
                    </tr>
                </thead>
                <tbody className="corpotabela">
                    {pegarDados.map(medicos => (
                        <tr key={medicos.id} className="linhatabela">
                            <td>{medicos.id}</td>
                            <td>{medicos.nome}</td>
                            <td>{medicos.telefone}</td>
                            <td>{medicos.email}</td>
                            <td>{medicos.especialidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}