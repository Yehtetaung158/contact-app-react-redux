import React from 'react'

const ButtonComponents = ({type,children}) => {
  return (
    <button type={type} className=' bg-blue-700 p-2 rounded-lg active:bg-blue-800 text-white'>{children}</button>
  )
}

export default ButtonComponents