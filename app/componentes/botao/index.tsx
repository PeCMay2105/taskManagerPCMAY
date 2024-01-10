
import React from 'react'

const buttonClass ={
padding:"0.5rem",
display:"flex",
justifyContent:"center",
alignItems:"center",
backgroundColor:"orange"

}

interface botaoProps{
    aoClicar: (event:React.MouseEvent<HTMLButtonElement>)=> void
}

export const Botao:React.FC<botaoProps> = ({aoClicar}) => {
  return (
    <div>
        <button style={buttonClass} onClick={aoClicar}>Criar</button>
    </div>
  )
}
