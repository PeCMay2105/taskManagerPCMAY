import React from 'react'


const delStyle ={
    padding:"1rem",
    display:"flex",
    borderRadius:"5px",
    height:"1rem",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"2vh",
    marginLeft:"0.5vh",
    backgroundColor:"red",
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.5)"
}

const buttonStyle = {
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out"
  };

interface DelProps {
  aoClicado: (evento: React.MouseEvent<HTMLButtonElement>) => void;
}
   



export const Del:React.FC<DelProps> = ({aoClicado}) => {
  return (
    <div style={delStyle}>
        <button onClick={event => aoClicado(event)}>
            Del
        </button>
    </div>
  )
}
