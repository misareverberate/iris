import React from 'react'
import HamburguerIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
type buttonControl = {
    onClick?: VoidFunction
    aberto:boolean
}
const HamburguerButton = ({onClick, aberto}:buttonControl) => {
    
    return (
    <div>
        <span onClick={onClick} className='text-orange-600 cursor-pointer lg:hidden'>
            {!aberto ? <CloseIcon/> : <HamburguerIcon/>}
        </span>
    </div>
  )
}

export default HamburguerButton