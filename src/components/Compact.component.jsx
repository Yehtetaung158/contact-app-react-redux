import React from 'react'
import DropDownComponent from './DropDown.component'

const CompactComponent = ({phone,email,address,name,id,detail,data,handelDelete}) => {
  return (
    <div className=' bg-yellow-500 text-white shadow-xl bg-opacity-25 mt-2  max-sm:w-5/6 max-xl:w-4/5 max-[4000px]:w-5/6 mx-auto flex justify-center items-center rounded-lg py-4 relative'>
        <ul>
            <li>{name}</li>
            <li>{address}</li>
            <li>{email}</li>
            <li>{phone}</li>
        </ul>
        {!detail &&  
        <DropDownComponent id={id} data={data} handelDelete={handelDelete}/>
        }
    </div>
  )
}

export default CompactComponent

// bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500