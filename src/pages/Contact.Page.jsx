import React, { useEffect, useState } from "react";
import { GetContact } from "../service/auth.service";
import useFetch from "../Hook/useFetch";
import CompactComponent from "../components/Compact.component";
import { DeleteContact } from "../service/contact.service";

const ContactPage = () => {
  const { handleDel, loading, data, error } = useFetch(GetContact);

  const [deleteContact,setDeleteContact]=useState(false)

  const handelDelete=(id)=>{
    const res=DeleteContact(id)
    if(res){
      setDeleteContact(!deleteContact)
    }
  }

  useEffect(() => {
    (async () => {
      handleDel();
    })();
  }, [useFetch,deleteContact]);
  const contactData=(data?.contacts.data)
  console.log(contactData)

  return <div>
    {loading ? <h1 className="text-white">Loading...</h1> : <>
    {error ? (<h1>{error}</h1>) : (
        <div className=" container w-screen mx-auto grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 
        max-[1600px]:grid-cols-4
        gap-4">
            {contactData?.map((i)=> <CompactComponent key={i.id} handelDelete={handelDelete} name={i.name} phone={i.phone} email={i.email} address={i.address} id={i.id} data={i}/>)}
        </div>
    )}</>}
  </div>;
};

export default ContactPage;

// bg-green-300 flex flex-wrap h-screen justify-start
