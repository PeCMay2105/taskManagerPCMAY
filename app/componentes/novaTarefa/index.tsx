

import React from 'react'
import { Botao } from '../botao'
import { Input } from '../input'
import { Form } from '../form'
import Task from '../newTask/task'

interface functions{
  getTarefaAdicionavel(arg:string): ()=> void
  Hovering(arg:boolean): void
}


export const NewTask:React.FC<functions> = ({getTarefaAdicionavel,Hovering}) => {

  

  return (
    <div>
      <Form novaTarefa={(valor:string)=>getTarefaAdicionavel(valor)} hovering={(valor:boolean)=> Hovering(valor) } ></Form>

    </div>

  )
}
