'use client'

  import React, { useState, useTransition } from 'react'   //useState é um hook que permite a criação de estados
  import { NewTask } from './componentes/novaTarefa'
  import {CSSTransition,TransitionGroup} from 'react-transition-group'
  import Task from './componentes/newTask/task'
  import { Del } from './componentes/delete/del'


  const mainStyle ={
    display:"flex",
    width:"100vw",
    alignItems:"center",
  }



  interface setting{
    setter: (arg:string) => void
  }

  interface tarefa{
    index:number,
    conteudo:string
  }

 
const Home:React.FC<setting> = () => {

  const [tarefa,setTarefa] = useState<string>("")
  const [listaTarefa,setListaTarefa] = useState<tarefa[]>([])


  const setter = (valor:string)=>{
    setTarefa(valor)
    modularizer([...listaTarefa,{index: listaTarefa.length, conteudo:valor}])
  }

  const modularizer = (lista:tarefa[]) =>{
    const listaModularizada =  lista.map((item:tarefa,index:number) =>{
      console.log(index)
      return {
        index:index,
        conteudo:item.conteudo,
      }

    })
    setListaTarefa(listaModularizada)
  }
  const deleting = (index:number) =>{
    const filteredList = listaTarefa.filter((item:tarefa) =>{
      return item.index !== index
    })
    setListaTarefa(filteredList)
  }


  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center'>

      <span className='text-3xl font-semibold uppercase'>Task Manager</span>
      <p className='text-1-xl font-sans lowercase flex justify-end flex-col'> Simple</p>
      <h1 className='text-1xl font-extrabold py 15 flex justify-end flex-col items-center '>Powered for learning</h1>

      <div className='display-flex justify-center flex-col items-center w-[70vw]'>
        <NewTask getTarefaAdicionavel={(valor:string)=> ()=>  setter(valor)}></NewTask>

        <TransitionGroup>

        {
          listaTarefa.map((objetoTarefa) =>
          <CSSTransition key={objetoTarefa.index} timeout={200} transition={'opacity 200ms'} classNames="item">

             <div style={mainStyle}><Task key={objetoTarefa.index} conteudo={objetoTarefa.conteudo}></Task>
            <Del aoClicado ={(event)=>{deleting(objetoTarefa.index)}}></Del>
            </div>
          </CSSTransition>
          )}
        </TransitionGroup>
        
      </div>
    </div>
  )
}

export default Home