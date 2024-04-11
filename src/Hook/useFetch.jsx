import { useEffect, useState } from "react";

const useFetch = (fun) => {
  const [getContact, setGetContact] = useState({
    loading: false,
    data: null,
    error: null,
  });
  const handleDel = async (arg) => {
    setGetContact((pre) => ({ ...pre, loading: true }));
    const res = await fun(arg);
    if (res.error) {
      setGetContact((pre) => ({ ...pre, loading: false, error: res.msg }));
    } else {
      setGetContact((pre) => ({ ...pre, loading: false, data: res.data }));
    }
    return res.data
  };
  const { loading, data, error } = getContact;
//   console.log(getContact)
  return {
    handleDel,
    loading,
    data,
    error,
  };
};

export default useFetch;
