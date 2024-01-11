

import React from 'react'
import { Botao } from '../botao'
import { Input } from '../input'
import { Form } from '../form'
import Task from '../newTask/task'

interface functions{
  getTarefaAdicionavel(arg:string): ()=> void
}


export const NewTask:React.FC<functions> = ({getTarefaAdicionavel}) => {

  

  return (
    <div>
      <Form novaTarefa={(valor:string)=>getTarefaAdicionavel(valor)}></Form>
      <Task></Task>
    </div>

  )
}
