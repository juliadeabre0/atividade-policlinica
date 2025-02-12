'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import style from "./consulta.module.css"

export default function consulta() {
    const [pegarDados, setDados] = useState([])

    async function executarDados() {
        const valores = await fetch('https://api-clinica-2a.onrender.com/consultas')
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
                            Medico
                        </th>
                        <th>
                            Especialidade
                        </th>
                        <th>
                            pacientes
                        </th>
                        <th>
                            Tipo
                        </th>
                    </tr>
                </thead>
                <tbody className="corpotabela">
                    {pegarDados.map(consulta => (
                        <tr key={consulta.id} className="linhatabela">
                            <td>{consulta.id}</td>
                            <td>{consulta.medico}</td>
                            <td>{consulta.especialidade}</td>
                            <td>{consulta.paciente}</td>
                            <td>{consulta.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}