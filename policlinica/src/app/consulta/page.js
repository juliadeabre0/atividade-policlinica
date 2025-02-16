'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import style from "./consulta.module.css"

export default function consulta() {
    const [pegarDados, setDados] = useState([])
    const [buscarPaciente, setBuscarPaciente] = useState([])
    const [buscarMedico, setBuscarMedico] = useState([])
    const [showlistaPaciente, setshowlistaPaciente] = useState(false)
    const [showlistaMedico, setshowlistaMedico] = useState(false)

    async function executarDados() {
        const valores = await fetch('https://api-clinica-2a.onrender.com/consultas')
        const data = await valores.json()
        setDados(data)
    }

    async function efetuarbuscarpaciente(valor) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/consultas?paciente=${valor}`)
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const resultado = await resposta.json();
            setBuscarPaciente(resultado);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function efetuarbuscarmedico(valor) {
        try {
            const resposta = await fetch(`https://api-clinica-2a.onrender.com/consultas?medico=${valor}`)
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados:" + resposta.statusText);

            }
            const resultado = await resposta.json();
            setBuscarMedico(resultado);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }


    useEffect(() => {
        executarDados();
        efetuarbuscarmedico('');
        efetuarbuscarpaciente('');
    }, []);

    return (
        <div className="divpai">
            <div className='campoinputpesquisa'>
                <div className="inputspai">
                    <div className="inputs">
                        <input type="text" placeholder="Buscar paciente" onFocus={() => setshowlistaPaciente(true)} onBlur={() => setshowlistaPaciente(false)} onChange={(e) => efetuarbuscarpaciente(e.target.value)} />
                        {showlistaPaciente &&
                            <div className="listanomes">
                                <ul key='eventobuscapacientes'>
                                    {buscarPaciente.map(valor => (
                                        <li key={valor.id + 'pacientes'}>
                                            {valor.nome}
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>

                    <div className="inputs">
                        <input type="text" onFocus={() => setshowlistaMedico(true)} onBlur={() => setshowlistaMedico(false)} onChange={(e) => efetuarbuscarmedico(e.target.value)} placeholder="Buscar médico" />
                        {showlistaMedico &&
                            <div className="listanomes">
                                <ul key='eventobuscamedicos'>
                                    {buscarMedico.map(valor => (
                                        <li key={valor.id + 'medicos'}>
                                            {valor.nome}
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="divpaitabela">
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
        </div>
    )
}