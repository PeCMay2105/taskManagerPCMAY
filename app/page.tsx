'use client'

  import React, { useState, useTransition,useEffect, use } from 'react'   //useState é um hook que permite a criação de estados
  import { NewTask } from './componentes/novaTarefa'
  import {CSSTransition,TransitionGroup} from 'react-transition-group'
  import Task from './componentes/newTask/task'
  import { Del } from './componentes/delete/del'
  import { Check } from './componentes/check'
  import { Done } from './componentes/doneTask/done'

  const mainStyle ={
    display:"flex",
    width:"100vw",
    alignItems:"center",
  }



  interface setting{
    setter: (arg:string) => void
  }


  interface fetchedObject{
    id:number,
    title:string,
    completed:boolean
  }
  interface tarefa{
    index:number,
    conteudo:string
  }

 
const Home:React.FC<setting> = () => {

  const [tarefa,setTarefa] = useState<string>("")
  const [listaTarefa,setListaTarefa] = useState<tarefa[]>([])
  const [checked,setChecked] = useState<tarefa[]>([])
  const [showHistoric,setShowHistoric] = useState<boolean>(false)



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
  const deleting = async(index:number) =>{
    console.log("Este é o indice passado para a função pelo componente"+index)
    const request = await fetch(`http://localhost:8000/taskManager/Tasks`,{
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json'
      },

      body: JSON.stringify({id:index})

    })
    const filteredList = listaTarefa.filter((item:tarefa) =>{
      return item.index !== index
    })
    const response = await request.json()
    console.log(response)
    setListaTarefa(filteredList)
  }


  const checking = async(index:number) =>{
    console.log("Esse é o indice passado para a função pelo componente"+index)
    const request = await fetch('http://localhost:8000/taskManager/Tasks', {
      method : 'PUT',
      headers:{
        'Content-Type':'application/json'
        
      },
      body: JSON.stringify({id:index, completed:true})
    })

    const response = await request.json()
    console.log("esta é a resposta da requisição" + response)

    const filteredList = listaTarefa.filter((item:tarefa) =>{
      return item.index !== index
    })
    setListaTarefa(filteredList)
    const checkedList = listaTarefa.filter((item:tarefa) =>{
      return item.index === index 
    }
    )
   
    setChecked([...checked,checkedList[0]])
    
  }

  const mensagemTaskVazia = "Não é possível adicionar uma tarefa vazia"

  const postTarefas = async(conteudo:string) =>{
    const request = await fetch('http://localhost:8000/taskManager/Tasks',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title:conteudo,completed:false})
    })
    const response = await request.json()
    console.log(response)
  }


  const fetchTarefas = async() =>{
    const response = await fetch('http://localhost:8000/taskManager/Tasks')
    const data = await response.json()
    console.log(data)

   data.forEach((item:fetchedObject) =>{
      
      const listaTitulos = new Set(listaTarefa.map(tarefa => tarefa.conteudo))
      const checkedTitles = new Set(checked.map(tarefa => tarefa.conteudo))

      if (item.completed && !checkedTitles.has(item.title)){
        setChecked(currentChecked => [...currentChecked,{index:item.id,conteudo:item.title}])
        setListaTarefa(currentListaTarefa => currentListaTarefa.filter(tarefa => tarefa.conteudo !== item.title))
      }else if(!listaTitulos.has(item.title) && !item.completed){
        setListaTarefa(currentListaTarefa => [...currentListaTarefa,{index:item.id,conteudo:item.title}])
      }
  })
  }

  useEffect(()=>{
    fetchTarefas()
  
  })


  return (
    
    <div className='w-screen py-20 flex justify-center flex-col items-center'>
        
      <span className='text-3xl font-semibold uppercase'>Task Manager</span>
      <p className='text-1-xl font-sans lowercase flex justify-end flex-col'> Simple</p>
      <h1 className='text-1xl font-extrabold py 15 flex justify-end flex-col items-center '>Powered for learning</h1>
      {/* {showHistoric ? listaTarefa.map((item:tarefa) => <p className='text-gl font-family:lucida-sans py 15px flex justify-center flex-col center' >{item.conteudo}</p>):null && checked.map((item:tarefa) => <p>{item.conteudo}</p>)} */}
      <div className='display-flex justify-space-between flex-col items-center w-[70vw]' style={{marginTop:'5vh'}}>
        <NewTask getTarefaAdicionavel={(valor:string)=> ()=>{ 
          if(valor != ""){
            setter(valor)
            postTarefas(valor)
          }else{
            alert(mensagemTaskVazia)
          }
        }}
         Hovering = {(response:boolean)=> setShowHistoric(response)} ></NewTask>
        <p style={{display:'flex',justifyContent:'flex-start',marginTop:'5vh',fontWeight:'bold'}}>Pending</p>
        <p style={{display:'flex',justifyContent:'flex-end',fontWeight:'bold'}}>Checked</p>
        <TransitionGroup>

        {
          listaTarefa.map((objetoTarefa) =>
          <CSSTransition key={objetoTarefa.index} timeout={200} transition={'opacity 200ms'} classNames="item">

             <div style={mainStyle}><Check aoClicado ={(event)=>{checking(objetoTarefa.index)}}></Check><Task key={objetoTarefa.index} conteudo={objetoTarefa.conteudo}></Task>
            <Del aoClicado ={(event)=>{deleting(objetoTarefa.index)}}></Del>
            </div>
          </CSSTransition>
          )}
        </TransitionGroup>
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:"column",alignItems:'flex-end' }}>
            {checked.map(checkedTaskObject => <Done conteudo={checkedTaskObject.conteudo}></Done>)}
          </div>
          {showHistoric ? (
            <div className="text-center border rounded p-4 flex-col justify-center items-center">
              <h2>Historico</h2>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {checked.map((item: tarefa) => (
                  <p className="text-gl font-family:lucida-sans py-2 text-center" style={{ border: '1px solid black', borderRadius: "12px",marginBottom:"1.5vh",backgroundColor: 'orange', opacity: 0.6, width: '25%', height:'5vh' }}>{item.conteudo}</p>
                ))}
              </div>
            </div>
          ) : null && checked.map((item: tarefa) => <p>{item.conteudo}</p>)}
      </div>
    </div>
  )
}

export default Home