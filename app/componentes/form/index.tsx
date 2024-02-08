

import React, { useState } from 'react'
import { Input } from '../input'
import { Botao } from '../botao'

interface Tasks{
    novaTarefa: (arg:string)=> void,
    hovering:(arg:boolean)=> void
}


export const Form:React.FC<Tasks> = ({novaTarefa,hovering}) => {


  return (
    <div className='flex'>
        <Input placeholder="Escreva sua tarefa" hovering ={(valor:boolean)=> hovering(valor)} finalValue={(valor:string)=>novaTarefa(valor)}></Input>
    </div>
  )
}
