

import React from 'react'
import { Botao } from '../botao'
import { Input } from '../input'
import { Form } from '../form'

interface functions{
  getTarefaAdicionavel(arg:string): ()=> void
}


export const NewTask:React.FC<functions> = ({getTarefaAdicionavel}) => {

  

  return (
    <Form novaTarefa={(valor:string)=>getTarefaAdicionavel(valor)}></Form>
  )
}
