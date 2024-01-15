import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

export default function CadastroPage() {
    return (
        <div>
            <div className="flex justify-center gap-9 mt-9 p-10">
                <div className="flex flex-col items-center justify-center gap-9">
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/Unidade"><p className="mt-6">Unidade</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/"><p className="mt-6">Unidade Orçamentária</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/ElementoDespesa"><p className="mt-6">Elemento Despesa</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/Acao"><p className="mt-6">Ação</p></Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-9">
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/Programa"><p className="mt-6">Programa</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/FonteRecurso"><p className="mt-6">Fonte de Recurso</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/TipoTransacao"><p className="mt-6">Tipo de Transação</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/ModalidadeAplicacao"><p className="mt-6">Modalidade de Aplicação</p></Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-9">
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/GrupoDespesa"><p className="mt-6">Grupo de Despesa</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/ObjetivoEstrategico"><p className="mt-6">Objetivo Estratégico</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/Solicitante"><p className="mt-6">Solicitante</p></Link>
                    </div>
                    <div className="w-64 h-24 bg-indigo-700 mt-4 font-bold text-white flex justify-center rounded-lg">
                        <Link href="/Lancamentos"><p className="mt-6">Lançamentos</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
