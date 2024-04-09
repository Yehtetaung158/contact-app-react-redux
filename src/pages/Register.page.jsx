import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FromInputComponents from '../components/FromInput.components';
import ButtonComponents from '../components/Button.components';
import { Register } from '../service/auth.service';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: "",
        password_confirmation:"",
      });
      const handleOnchange = (e) => {
        setFormData((pre) => ({
          ...pre,
          [e.target.name]: e.target.value,
        }));
      };
      const formDataHandler = (e) => {
        e.preventDefault();
        const res=Register(formData)
        console.log(res);
      };
    
      const nav=useNavigate()
    return (
        <div className="max-sm:w-full max-md:w-3/5 w-1/3 max-xl:w-2/4 mx-auto max-sm:h-screen  max-sm:px-3" >
            <form
          onSubmit={formDataHandler}
          className="container flex flex-col space-y-12 "
        >
          <h1 className=" mx-auto font-bold text-xl">Register</h1>
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
          <ButtonComponents type="submit" />
        </form>
        <div><p>You have already an account <button className=" text-blue-800 underline" onClick={()=>{nav("/")}}>login</button></p></div>
        </div>
      );
}

export default RegisterPage