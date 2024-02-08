'use Client'

import React, { useState } from 'react'
import { Botao } from '../botao'
import { Historico } from '../historico/clock'

    interface types {
        nome:string,
        valor:any,
        placeholder:string
    }

    

export const Input = ({finalValue,placeholder,hovering}:any) => {

    const [valor,setValor] = useState(placeholder)
    const [holding,setHolding] = useState(placeholder)



  return (
    <div className='flex items-center justify-between'>
        <Historico hovering={(valor:boolean)=> hovering(valor)}></Historico>
        <input className="w-full p-2 border-gray-200" placeholder={placeholder} onChange={(event)=> setValor(event.target.value)}></input>
        <Botao aoClicar = {finalValue(valor)} ></Botao>
    </div>
  )
}
