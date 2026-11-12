'use client'
import React, { ReactElement } from 'react'

type TextButton = {
  text?:string;
  icon?:ReactElement;
  type?:'button' | 'submit' | 'reset';
  onclick?:()=> void;
}
const AlternativeButton = ({text, icon, type='button', onclick}:TextButton) => {
  return (
    <button onClick={onclick} type={type} className='bg-white text-orange-500 px-5 py-2 rounded-full flex justify-center items-center hover:bg-orange-500 hover:text-white hover:scale-110 transition ease-linear delay-100'>
        {icon}
        {text && <span>{text}</span>}
    </button>
  )
}

export default AlternativeButton