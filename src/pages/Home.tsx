import { Menu } from '@/components/Menu'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import React from 'react'
import AlternativeButton from '@/components/Buttons/AlternativeButton'
import HomeImg from '@/assets/bg-tinta.jpg'

const coresDestaque = [
  { nome: 'Laranja Cítrico', tipo: 'Acrílica fosca', cor: 'bg-orange-500' },
  { nome: 'Amarelo Sol', tipo: 'Acrílica acetinada', cor: 'bg-yellow-400' },
  { nome: 'Verde Musgo', tipo: 'Acrílica fosca', cor: 'bg-green-700' },
  { nome: 'Azul Oceano', tipo: 'Látex premium', cor: 'bg-blue-600' },
]

const beneficios = [
  { titulo: 'Para todos os ambientes', texto: 'Tintas para paredes internas e externas, com acabamentos fosco, acetinado e brilhante.' },
  { titulo: 'Escolha com calma', texto: 'Compare as cores antes de decidir e veja como elas ficam na sua parede.' },
  { titulo: 'Do início ao fim', texto: 'Ajuda para calcular a quantidade certa e escolher a tinta ideal para cada superfície.' },
]

const Home = () => {
  return (
    <div>
      <Menu />
      <div className='bg-gradient'>
        <div className='flex flex-col flex-wrap items-center p-5 lg:px-40 lg:flex-row'>
          <div className='flex flex-col px-4 text-center mb-5 lg:w-1/2 gap-4 lg:text-left'>
            <p className='text-neutral-800 font-bold lg:text-2xl'>Todas as cores da sua imaginação, para seu lar</p>
            <h1 className='text-white text-3xl font-bold lg:text-5xl'>A maior loja de tintas do país!!!</h1>
            <p className='text-neutral-800  font-bold lg:text-2xl'>Tintas para todos os ambientes internos e externos</p>
            <div className='flex flex-col gap-4 lg:flex-row '>
              <PrimaryButton text="Ver catálogo" />
              <AlternativeButton text='Ver carrinho' />
            </div>
          </div>
          <div className='flex flex-col lg:w-1/2'>
            <img className='border-8' src={HomeImg.src} alt="Baldes de tinta" />
          </div>
        </div>
      </div>

      <section className='px-10 py-16 lg:px-40'>
        <h2 className='text-3xl font-bold text-neutral-800 text-center mb-10'>Cores em destaque</h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {coresDestaque.map((item) => (
            <div key={item.nome} className='bg-white rounded-2xl shadow-md overflow-hidden'>
              <div className={`${item.cor} h-40`} />
              <div className='p-4'>
                <p className='font-bold text-neutral-800'>{item.nome}</p>
                <p className='text-sm text-neutral-500'>{item.tipo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-orange-100 px-10 py-16 lg:px-40'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {beneficios.map((item) => (
            <div key={item.titulo} className='flex flex-col gap-2 text-center md:text-left'>
              <h3 className='text-xl font-bold text-orange-600'>{item.titulo}</h3>
              <p className='text-neutral-800'>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-neutral-800 px-10 py-16 text-center lg:px-40'>
        <h2 className='text-white text-3xl font-bold mb-4'>Pronto para mudar a cor da sua casa?</h2>
        <p className='text-neutral-300 mb-8'>Veja o catálogo completo e encontre a cor certa para cada cômodo.</p>
        <div className='flex flex-col gap-4 justify-center lg:flex-row'>
          <PrimaryButton text="Ver catálogo" />
          <AlternativeButton text='Ver carrinho' />
        </div>
      </section>

      <footer className='bg-white px-10 py-8 text-center text-neutral-500 lg:px-40'>
        <p className='font-bold text-neutral-800'>Irís — Loja de Tintas</p>
        <p className='text-sm'>Todas as cores da sua imaginação, para seu lar.</p>
      </footer>
    </div>
  )
}

export default Home
