import React, { useEffect, useState } from "react";
import FromInputComponents from "../components/FromInput.components";
import ButtonComponents from "../components/Button.components";
import { useNavigate } from "react-router-dom";
import { Login } from "../service/auth.service";
import useFetch from "../Hook/useFetch";

const LogInPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [fetch, setFetch] = useState({
    loading: false,
    data: null,
    error: null,
  });

//   const {loading,error,data}=useFetch()

  const handleOnchange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const formDataHandler = async (e) => {
    e.preventDefault();
    setFetch((pre) => ({ ...pre, loading: true }));
    console.log(fetch)
    const res =await Login(formData);
    console.log(res.data);
    if (res.error) {
      setFetch((pre) => ({ ...pre, loading: false, error: res.msg }));
    } else {
      setFetch((pre) => ({ ...pre, loading: false, data: res.data }));
    }
    console.log(fetch);
  };

  useEffect(()=>{
    if(fetch?.data){
        nav("/home")
    }
  },[fetch])


  return (
    <div className="max-sm:w-full max-md:w-3/5 w-1/3 max-xl:w-2/4 mx-auto max-sm:h-screen  max-sm:px-3">
      <form
        onSubmit={formDataHandler}
        className="container flex flex-col space-y-12 "
      >
        <h1 className=" mx-auto font-bold text-xl">Log In</h1>
        <FromInputComponents
          value={formData.email}
          onChange={handleOnchange}
          label={"Enter Your Email"}
          name={"email"}
          type={"email"}
          placeholder={"example@gmail.com"}
        />
        <FromInputComponents
          value={formData.password}
          onChange={handleOnchange}
          label={"Enter Your Password"}
          name={"password"}
          type={"password"}
          placeholder={"xxxxxxx"}
        />
        <ButtonComponents type="submit" />
      </form>
      <div>
        <p>
          You don't have any an account{" "}
          <button
            className=" text-blue-800 underline"
            onClick={() => {
              nav("/register");
            }}
          >
            register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
