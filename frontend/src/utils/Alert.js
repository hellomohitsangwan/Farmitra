import React, { useEffect } from 'react'
import "../screens/Screen.css"

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      removeAlert()
    },4000)
    return()=>clearTimeout(timeout)
  },[list])
  return <p className={`alert alert1 alert-${type}`}>{msg}</p>
}

export default Alert