import React from 'react'
import {useState} from 'react'
import {FaRegClock} from 'react-icons/fa'


interface hovering{
    hovering:(arg:boolean)=> void
}

const clockStyle ={
    backgroundColor:"white",
    padding:"2px",
    width:"2vw",
    marginRight:"0.5vw",
    borderRadius:"15px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}

const onHoverStyle ={
    backgroundColor:"white",
    transform:"scale(1.1)",
    padding:"2px",
    width:"2vw",
    marginRight:"0.5vw",
    borderRadius:"15px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}

export const Historico:React.FC<hovering> = ({hovering}) => {

    const [hover,setHover] = useState(false)

  return (
    <div>
        <button style={hover ? onHoverStyle:clockStyle} onMouseEnter ={()=> {setHover(true); hovering(true)}} onMouseLeave={()=>{ setHover(false); hovering(false)}}><FaRegClock/></button>
    </div>
  )
}
