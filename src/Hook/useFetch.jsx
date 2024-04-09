import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const useFetch = (fun, arg) => {
  const [getContact, setGetContact] = useState({
    loading: false,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      setGetContact((pre) => ({ ...pre, loading: true }));
      const res = await fun(arg);
      if (res.error) {
        setGetContact((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setGetContact((pre) => ({ ...pre, loading: false, data: res.data }));
      }
    })();
  }, []);
  const { loading, data, error } = getContact;
  return {
    loading,
    data,
    error,
  };
};

export default useFetch;
