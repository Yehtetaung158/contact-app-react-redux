import React from 'react'
import { useNavigate } from 'react-router-dom'


const EmptyComponent = () => {
    const nav=useNavigate()
  return (
    <div className=' flex flex-col'>
        <div><img className='mx-auto w-[200px]' src="img/Add notes-pana.svg" /></div>
        <p className='text-white'>You have not any contact. Please <button onClick={()=>nav("/home/add")} className=' text-purple-900 underline'>add contact</button></p>
    </div>
  )
}

export default EmptyComponent