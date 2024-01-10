

import React, { useState } from 'react'
import { Input } from '../input'
import { Botao } from '../botao'

interface Tasks{
    novaTarefa: (arg:string)=> void,
}


export const Form:React.FC<Tasks> = ({novaTarefa}) => {


  return (
    <div className='flex'>
        <Input placeholder="Escreva sua tarefa" finalValue={(valor:string)=>novaTarefa(valor)}></Input>
    </div>
  )
}
