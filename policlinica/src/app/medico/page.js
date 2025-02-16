'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import style from "./medico.module.css"

export default function medicos() {
    const [pegarDados, setDados] = useState([])
    const [buscar, setBuscar] = useState([])
    const [showlista, setshowlista] = useState(false)

    async function executarDados() {
        const valores = await fetch('https://api-clinica-2a.onrender.com/medicos')
        const data = await valores.json()
        setDados(data)
    }
    async function efetuarbuscar(valor) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/medicos?nome=${valor}`)
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const resultado = await resposta.json();
            setBuscar(resultado);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        executarDados();
        efetuarbuscar('');
    }, []);

    return (
        <div className="divpai">
            <div className='campoinputpesquisa'>
                <input type="text" onFocus={() => setshowlista(true)} onBlur={() => setshowlista(false)} onChange={(e) => efetuarbuscar(e.target.value)} placeholder="Buscar médico"/>
                {showlista &&
                    <div className="listanomes">
                        <ul key='eventobuscas'>
                            {buscar.map(valor => (
                                <li key={valor.id}>
                                    {valor.nome}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                }
            </div>
            <div className="divpaitabela">
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
        </div>)
}