import React from 'react'

const ContainerComponents = ({children}) => {
  return (
    <div className=' container bg-yellow-800 mx-auto h-screen'>{children}</div>
  )
}

export default ContainerComponents