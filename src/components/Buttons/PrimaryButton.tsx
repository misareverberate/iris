'use client'
import React, { ReactElement } from 'react'

type TextButton = {
  text?:string;
  icon?:ReactElement;
  type?:'button' | 'submit' | 'reset';
  onclick?:()=> void;
}
const PrimaryButton = ({text, icon, type='button', onclick}:TextButton) => {
  return (
    <button onClick={onclick} type={type} className='bg-orange-500 text-white px-5 py-2 rounded-full flex justify-center items-center hover:scale-110 hover:bg-orange-400 transition ease-linear delay-100'>
        {icon}
        {text && <span className={icon ? 'ml-2' : undefined}>{text}</span>}
    </button>
  )
}

export default PrimaryButton