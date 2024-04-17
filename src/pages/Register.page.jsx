import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FromInputComponents from "../components/FromInput.components";
import ButtonComponents from "../components/Button.components";
import { Register } from "../service/auth.service";
import useFetch from "../Hook/useFetch";
import { IoWarningOutline } from "react-icons/io5";
import PreventComponents from "../components/Prevent.components";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../store/action/auth.action";

const RegisterPage = () => {
  const nav = useNavigate();
  const {loading,error,data}=useSelector((store)=>store.auth)
  console.log(loading,error,data);
  const dispatch=useDispatch()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // const { handleDel, loading, error, data } = useFetch(Register);

  const handleOnchange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const formDataHandler = (e) => {
    e.preventDefault();
    RegisterAction(dispatch,formData)
    // const res = handleDel(formData);
    // console.log(res);

  };
  useFetch(() => {
    if (data.success) {
      nav("/");
    }
  });
  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
        <div className=" text-white max-sm:w-full max-md:w-3/5 w-1/3 max-xl:w-2/4 mx-auto max-sm:h-screen  max-sm:px-3">
      <form
        onSubmit={formDataHandler}
        className="container flex flex-col space-y-12 "
      >
        <h1 className=" mx-auto font-bold text-xl">Register</h1>
        {error && (
          <h1 className=" fixed top-10 left-20 right-20 justify-center flex items-center gap-2 text-red-800 bg-opacity-35 bg-yellow-600">
            <IoWarningOutline />
            {error}
          </h1>
        )}
        <FromInputComponents
          value={formData.name}
          onChange={handleOnchange}
          label={"Name"}
          name={"name"}
          type={"text"}
          placeholder={"Kyaw Gyi"}
        />
        <FromInputComponents
          value={formData.email}
          onChange={handleOnchange}
          label={"Email"}
          name={"email"}
          type={"email"}
          placeholder={"kyawgyi123@gmail.com"}
        />
        <FromInputComponents
          value={formData.password}
          onChange={handleOnchange}
          label={"Password"}
          name={"password"}
          type={"password"}
          placeholder={"xxxxxxx"}
        />
        <FromInputComponents
          value={formData.password_confirmation}
          onChange={handleOnchange}
          label={"Confirm Password"}
          name={"password_confirmation"}
          type={"password_confirmation"}
          placeholder={"xxxxxxx"}
        />
        {/* <ButtonComponents type="submit"></ButtonComponents> */}
        <ButtonComponents type="submit">
          {loading ? <h1>Loading...</h1> : <h1>Sign up</h1>}
        </ButtonComponents>
      </form>
      <div>
        <p>
          You have already an account{" "}
          <button
            className=" text-blue-800 underline"
            onClick={() => {
              nav("/");
            }}
          >
            login
          </button>
        </p>
      </div>
    </div>
    </PreventComponents>
  );
};

export default RegisterPage;
