import React from 'react'

const nTaskStyle ={
    backgroundColor:"lime",
    display:"flex",
    alignItems:"center",
    border:"gray 200",
    width:"15.8rem",
    marginTop:"1rem",
    padding:"0.5vh",
    borderRadius:"5px",
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.5)"
}

const organizationStyle ={
  display:'flex',
  
}

interface content {
    conteudo:string,
}


export const Done:React.FC<content> = ({conteudo}) => {
  return (
    <div>
        <div style={organizationStyle}>
            <div style={nTaskStyle}>
            <h1>{conteudo}</h1>
            </div>
        </div>
    </div>
  )
}
