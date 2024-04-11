import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PreventComponents = ({fail,children,check}) => {
    const nav = useNavigate()
    useEffect(()=>{
        if(check){
            nav(fail)
        }
    },[])
  return (
    <div>{children}</div>
  )
}

export default PreventComponents