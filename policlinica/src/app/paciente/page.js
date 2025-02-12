'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import style from "./paciente.module.css"

export default function paciente() {
    const [pegarDados, setDados] = useState([])

    async function executarDados() {
        const valores = await fetch('https://api-clinica-2a.onrender.com/pacientes')
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
                            CPF
                        </th>
                    </tr>
                </thead>
                <tbody className="corpotabela">
                    {pegarDados.map(paciente => (
                        <tr key={paciente.id} className="linhatabela">
                            <td>{paciente.id}</td>
                            <td>{paciente.nome}</td>
                            <td>{paciente.telefone}</td>
                            <td>{paciente.email}</td>
                            <td>{paciente.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}