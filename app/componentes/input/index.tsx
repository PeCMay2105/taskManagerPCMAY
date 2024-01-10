'use Client'

import React, { useState } from 'react'
import { Botao } from '../botao'

    interface types {
        nome:string,
        valor:any,
        placeholder:string
    }

export const Input = ({finalValue,placeholder}:any) => {

    const [valor,setValor] = useState(placeholder)


  return (
    <div className='flex'>
        
        <input className="w-full p-2 border-gray-200" placeholder={placeholder} onChange={(event)=> setValor(event.target.value)}></input>
        <Botao aoClicar = {finalValue(valor)} ></Botao>
    </div>
  )
}
