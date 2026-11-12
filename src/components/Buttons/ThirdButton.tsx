'use client'
import React, { ReactElement } from 'react'

type TextButton = {
  text?:string;
  icon?:ReactElement;
  type?:'button' | 'submit' | 'reset';
  onclick?:()=> void;
}
const ThirdButton = ({text, icon, type='button', onclick}:TextButton) => {
  return (
    <button onClick={onclick} type={type} className=' text-orange-500 px-5 py-2 rounded-full flex justify-center items-center hover:bg-orange-100 transition ease-in-out delay-100'>
        {icon}
        {text}
    </button>
  )
}

export default ThirdButton