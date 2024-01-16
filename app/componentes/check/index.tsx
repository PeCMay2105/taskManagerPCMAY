import React from 'react'
import { FaCheck } from 'react-icons/fa'



interface checkProps {
    aoClicado: (evento: React.MouseEvent<HTMLButtonElement>) => void;
  }



export const Check:React.FC<checkProps> = ({aoClicado}) => {

    const checkStyle ={
        padding:"1rem",
        display:"flex",
        borderRadius:"5px",
        height:"1rem",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"2vh",
        marginRight:"0.5vh",
        backgroundColor:"green",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.5)"
    }



  return (
    <div>
        <button style={checkStyle} onClick={ event=> aoClicado(event)}><FaCheck/></button>
    </div>
  )
}
