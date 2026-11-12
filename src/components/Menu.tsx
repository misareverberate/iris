import React, { useState } from 'react'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondButton from './Buttons/SecondButton';
import ThirdButton from './Buttons/ThirdButton';
import HamburguerIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Logo from '@/assets/Iris.png'
// import HamburguerButton from './Buttons/HamburguerButton';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation'

export const Menu = () => {
    const [menu, setMenu] = useState<boolean>(false)
    const router = useRouter()
    
    return (
        <div className='w-full h-20 bg-white shadow-md'>
            <div className='px-10 w-full h-full m-auto flex justify-between items-center lg:px-40'>
                <img className="w-20 " src={Logo.src} alt="Uma logo em formato de arco-irís" />
                <div className='hidden lg:flex items-center gap-4'>
                    <ThirdButton text='Home' onclick={() => { setMenu(false); router.push('/') }}/>
                    <ThirdButton text='Catálogo' onclick={() => { setMenu(false); router.push('/catalogo') }}/>
                    <SecondButton text='Cadastrar nova cor' icon={<ControlPointOutlinedIcon />} type='button'/>
                    <PrimaryButton text="Conta" icon={<AccountCircleOutlinedIcon />} type="button" onclick={() => alert("Clicou na conta")}/>
                </div>
                <div className='flex lg:hidden'>
                    <Button onClick={() => setMenu(!menu)}> {!menu ? <HamburguerIcon/> : <CloseIcon/>} </Button>
                </div>
            </div>
            {menu && (
            <div className='bg-white w-full h-[calc(100vh-5rem)] fixed top-20 pb-4'>
                <div className='flex flex-col gap-2 px-20'>
                    <ThirdButton text='Home' onclick={() => { setMenu(false); router.push('/') }}/>
                    <ThirdButton text='Catálogo' onclick={() => { setMenu(false); router.push('/catalogo') }}/>
                    <SecondButton text='Cadastrar nova cor' icon={<ControlPointOutlinedIcon />} type='button'/>
                    <PrimaryButton text="Conta" icon={<AccountCircleOutlinedIcon />} type="button" onclick={() => alert("Clicou na conta")}/>
                </div>
            </div>
            )}
        </div>
    )
}
