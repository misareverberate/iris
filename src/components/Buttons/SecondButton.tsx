'use client'
import React, { ReactElement } from 'react'

type TextButton = {
  text?:string;
  icon?:ReactElement;
  type?:'button' | 'submit' | 'reset';
  onclick?:()=> void;
}
const SecondButton = ({text, icon, type='button', onclick}:TextButton) => {
  return (
    <button onClick={onclick} type={type} className='border-2 border-orange-500 text-orange-500 px-5 py-2 rounded-full flex justify-center items-center hover:bg-orange-500 hover:text-white transition ease-linear delay-100 hover:scale-105' >
        {icon}
        {text && <span className='ml-2'>{text}</span>}
    </button>
  )
}

export default SecondButton