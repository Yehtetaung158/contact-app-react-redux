import React, { useEffect, useState } from "react";
import { GetContact } from "../service/auth.service";
import useFetch from "../Hook/useFetch";
import CompactComponent from "../components/Compact.component";
import { DeleteContact } from "../service/contact.service";
import EmptyComponent from "../components/Empty.component";

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
        gap-4 relative">
            {contactData?.map((i)=> <CompactComponent key={i.id} handelDelete={handelDelete} name={i.name} phone={i.phone} email={i.email} address={i.address} id={i.id} data={i}/>
          )}
          <div className=" hidden first:block absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <EmptyComponent/>
          </div>
        </div>
    )}</>}
  </div>;
};

export default ContactPage;

// bg-green-300 flex flex-wrap h-screen justify-start
