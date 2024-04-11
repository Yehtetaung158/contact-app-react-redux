import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hook/useFetch";
import { DetailContact } from "../service/contact.service";
import CompactComponent from "../components/Compact.component";

const DetailContactPage = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data, handleDel } = useFetch(DetailContact);

  useEffect(() => {
    (async () => {
      const res = await handleDel(id);
    })();
  }, [id]);

  if (data) {
    const detail = data?.success;
    const { name, phone, email, address } = data?.contact;
  }

  console.log({
    loading,
    error,
    data,
    // detail,
  });

  return (
    <div>
        {loading ? <h1 className=" text-white">Loading...</h1> : <>
        {error ? <h1>{error}</h1> : 
            <CompactComponent detail={data?.success} name={data?.contact.name} email={data?.contact.email} phone={data?.contact.phone} address={data?.contact.address}/> 
        }</>}
    </div>
  );
};

export default DetailContactPage;
