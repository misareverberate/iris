'use client'
import { Menu } from '@/components/Menu'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import SecondButton from '@/components/Buttons/SecondButton'
import React, { useState } from 'react'

const produtos = [
  { nome: 'Laranja Cítrico', acabamento: 'Acrílica fosca', ambiente: 'Interna', cor: 'bg-orange-500' },
  { nome: 'Amarelo Sol', acabamento: 'Acrílica acetinada', ambiente: 'Interna', cor: 'bg-yellow-400' },
  { nome: 'Verde Musgo', acabamento: 'Acrílica fosca', ambiente: 'Interna', cor: 'bg-green-700' },
  { nome: 'Roxo Ametista', acabamento: 'Esmalte brilhante', ambiente: 'Interna', cor: 'bg-purple-600' },
  { nome: 'Rosa Algodão', acabamento: 'Acrílica acetinada', ambiente: 'Interna', cor: 'bg-pink-300' },
  { nome: 'Azul Oceano', acabamento: 'Látex premium', ambiente: 'Externa', cor: 'bg-blue-600' },
  { nome: 'Vermelho Carmim', acabamento: 'Látex premium', ambiente: 'Externa', cor: 'bg-red-600' },
  { nome: 'Cinza Grafite', acabamento: 'Esmalte brilhante', ambiente: 'Externa', cor: 'bg-neutral-600' },
]

const filtros = ['Todas', 'Interna', 'Externa']

const Catalogo = () => {
  const [filtro, setFiltro] = useState('Todas')

  const produtosFiltrados = filtro === 'Todas' ? produtos : produtos.filter((item) => item.ambiente === filtro)

  return (
    <div>
      <Menu />

      <section className='px-10 py-12 text-center lg:px-40'>
        <h1 className='text-4xl font-bold text-neutral-800 mb-4'>Catálogo de cores</h1>
        <p className='text-neutral-600 mb-8'>Escolha a cor e o acabamento para cada ambiente da sua casa.</p>
        <div className='flex flex-wrap justify-center gap-4'>
          {filtros.map((opcao) => (
            filtro === opcao
              ? <div key={opcao} className='border-2 border-transparent rounded-full'><PrimaryButton text={opcao} onclick={() => setFiltro(opcao)} /></div>
              : <SecondButton key={opcao} text={opcao} onclick={() => setFiltro(opcao)} />
          ))}
        </div>
      </section>

      <section className='px-10 pb-16 lg:px-40'>
        <p className='text-neutral-500 mb-6'>{produtosFiltrados.length} cores</p>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {produtosFiltrados.map((item) => (
            <div key={item.nome} className='bg-white rounded-2xl shadow-md overflow-hidden'>
              <div className={`${item.cor} h-40`} />
              <div className='p-4'>
                <p className='font-bold text-neutral-800'>{item.nome}</p>
                <p className='text-sm text-neutral-500'>{item.acabamento}</p>
                <p className='text-sm text-orange-600 mt-2'>Ambiente {item.ambiente.toLowerCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className='bg-white px-10 py-8 text-center text-neutral-500 lg:px-40'>
        <p className='font-bold text-neutral-800'>Irís — Loja de Tintas</p>
        <p className='text-sm'>Todas as cores da sua imaginação, para seu lar.</p>
      </footer>
    </div>
  )
}

export default Catalogo
