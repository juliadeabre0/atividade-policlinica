'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import style from "./paciente.module.css"

export default function paciente() {
    const [pegarDados, setDados] = useState([])
    const [buscar, setBuscar] = useState([])
    const [showlista, setshowlista] = useState(false)

    async function executarDados() {
        const valores = await fetch('https://api-clinica-2a.onrender.com/pacientes')
        const resultado = await valores.json()
        setDados(resultado)
    }

    async function efetuarbuscar(valor) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/pacientes?nome=${valor}`)
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
                <input type="text" onFocus={() => setshowlista(true)} onBlur={() => setshowlista(false)} onChange={(e) => efetuarbuscar(e.target.value)} placeholder="Buscar paciente"/>
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
        </div>
    )
}