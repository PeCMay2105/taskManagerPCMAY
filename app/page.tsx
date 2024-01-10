'use client'

import React, { useState } from 'react'
import { NewTask } from './componentes/novaTarefa'

  interface setting{
    setter: (arg:string) => void
  }

const Home:React.FC<setting> = () => {

  const [tarefa,setTarefa] = useState<string>("")


  const setter = (valor:string)=>{
    setTarefa(valor)
  }


  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center'>

      <span className='text-3xl font-semibold uppercase'>Task Manager</span>
      <p className='text-1-xl font-sans lowercase flex justify-end flex-col'> Simple</p>
      <h1 className='text-1xl font-extrabold py 15 flex justify-end flex-col items-center '>Powered for learning</h1>

      <div className='display-flex justify-center flex-col items-center w-[70vw]'>
        <NewTask getTarefaAdicionavel={(valor:string)=> ()=>  setter(valor)}></NewTask>
      </div>
    </div>
  )
}

export default Home