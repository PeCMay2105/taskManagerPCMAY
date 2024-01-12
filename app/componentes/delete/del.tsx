import React from 'react'


const delStyle ={
    padding:"1rem",
    display:"flex",
    borderRadius:"5px",
    height:"3rem",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"2vh",
    marginLeft:"0.5vh",
    backgroundColor:"red"
}

const buttonStyle = {
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out"
  };


export const Del = () => {
  return (
    <div style={delStyle}>
        <button>
            Del
        </button>
    </div>
  )
}
