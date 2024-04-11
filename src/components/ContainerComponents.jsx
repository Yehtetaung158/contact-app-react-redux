import React from 'react'

const ContainerComponents = ({children}) => {
  return (
    <div className=' container bg-leaf-bg-http bg-fixed mx-auto h-screen overflow-scroll'>{children}</div>
  )
}

export default ContainerComponents