import React, { useEffect, useState } from "react";
import FromInputComponents from "../components/FromInput.components";
import ButtonComponents from "../components/Button.components";
import { useNavigate } from "react-router-dom";
import { Login } from "../service/auth.service";
import useFetch from "../Hook/useFetch";
import { IoWarningOutline } from "react-icons/io5";
import PreventComponents from "../components/Prevent.components";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../store/action/auth.action";


const LogInPage = () => {
  const nav = useNavigate();

  const {loading,error,data}=useSelector((store)=>store.auth);
  console.log(loading,error,data);
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

//   const [fetch, setFetch] = useState({
//     loading: false,
//     data: null,
//     error: null,
//   });

  // const {handleDel,loading,error,data}=useFetch(Login)

  const handleOnchange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const formDataHandler = async (e) => {
    e.preventDefault();
    // const data=handleDel(formData)
    LoginAction(dispatch,formData)
    // console.log(data);
  };

  useEffect(()=>{
    if(data?.success){
        nav("/home")
    }
  },[data])


  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
        <div className=" text-white max-sm:w-full max-md:w-3/5 w-1/3 max-xl:w-2/4 mx-auto max-sm:h-screen  max-sm:px-3">
      <form
        onSubmit={formDataHandler}
        className="container flex flex-col space-y-12 relative "
      >
        <h1 className=" mx-auto font-bold text-xl">Log In</h1>

        {error && <h1 className=" fixed top-10 left-20 right-20 justify-center flex items-center gap-2 text-red-800 bg-opacity-35 bg-yellow-600"><IoWarningOutline />
{error}</h1>}

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
        <ButtonComponents type="submit">
            {loading ? <h1>Loading...</h1> : <h1>Log In</h1>}
        </ButtonComponents>
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
    </PreventComponents>
  );
};

export default LogInPage;
