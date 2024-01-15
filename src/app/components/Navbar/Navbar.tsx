import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className='bg-indigo-700 flex flex-row justify-between p-1'>
      <h1 className='font-bold text-white text-2xl justify-center py-3'><Link href="/">Orçamento</Link></h1>
      <ul className='flex flex-row gap-4'>
        <li className='text-white hover:bg-gray-600 p-4 font-bold'><Link href="/CadastroPage">Cadastrar Recurso</Link></li>
        <li className='text-white hover:bg-gray-600 p-4 font-bold'><Link href="/NovoLancamento">Novo Lançamento</Link></li>
      </ul>
    </nav>
  )
}
