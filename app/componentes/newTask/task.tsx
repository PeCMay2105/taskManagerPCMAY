import React from 'react'


const nTaskStyle ={
    backgroundColor:"Orange",
    border:"gray 200",
    width:"17.8rem",
    marginTop:"1rem",
    padding:"1.5vh",
    borderRadius:"5px"
}


interface content {
    conteudo:string,
}


const Task:React.FC<content> = ({conteudo}) => {
  return (
    <div>
        <div style={nTaskStyle}>
        <h1>{conteudo}</h1>
        </div>
    </div>
  )
}

export default Task