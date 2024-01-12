import React from 'react'
import { Del } from '../delete/del'


const nTaskStyle ={
    backgroundColor:"Orange",
    border:"gray 200",
    width:"17.8rem",
    marginTop:"1rem",
    padding:"1.5vh",
    borderRadius:"5px"
}

const organizationStyle ={
  display:'flex',
  
}

interface content {
    conteudo:string,
}


const Task:React.FC<content> = ({conteudo}) => {
  return (
    <div style={organizationStyle}>
        <div style={nTaskStyle}>
        <h1>{conteudo}</h1>
        </div>
        <Del></Del>
    </div>
  )
}

export default Task