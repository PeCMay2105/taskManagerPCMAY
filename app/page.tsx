'use client'

import React, { useState } from 'react'
import { NewTask } from './componentes/novaTarefa'
import Task from './componentes/newTask/task'

  interface setting{
    setter: (arg:string) => void
  }


 
const Home:React.FC<setting> = () => {

  const [tarefa,setTarefa] = useState<string>("")
  const [listaTarefa,setListaTarefa] = useState<string[]>([])


  const setter = (valor:string)=>{
    setTarefa(valor)
    setListaTarefa([...listaTarefa,valor])
    modularizer([...listaTarefa])
  }

  const modularizer = (lista:string[]) =>{
    const listaModularizada =  lista.map((item:string,index:number) =>{
      return {
        index:index,
        conteudo:item,
      }

    }
    )
    setListaTarefa(listaModularizada)
  }


  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center'>

      <span className='text-3xl font-semibold uppercase'>Task Manager</span>
      <p className='text-1-xl font-sans lowercase flex justify-end flex-col'> Simple</p>
      <h1 className='text-1xl font-extrabold py 15 flex justify-end flex-col items-center '>Powered for learning</h1>

      <div className='display-flex justify-center flex-col items-center w-[70vw]'>
        <NewTask getTarefaAdicionavel={(valor:string)=> ()=>  setter(valor)}></NewTask>
        {
          listaTarefa.map((objetoTarefa) =>{
            return <Task key={objetoTarefa.index} conteudo={objetoTarefa.conteudo}></Task>
          })
        }
      </div>
    </div>
  )
}

export default Home