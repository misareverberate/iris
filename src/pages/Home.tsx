import { Menu } from '@/components/Menu'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import React from 'react'
import AlternativeButton from '@/components/Buttons/AlternativeButton'
import HomeImg from '@/assets/bg-tinta.jpg'
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
    </div>
  )
}

export default Home