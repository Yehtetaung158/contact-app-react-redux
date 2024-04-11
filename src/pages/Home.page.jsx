import React, { useEffect } from "react";
import PreventComponents from "../components/Prevent.components";
import { Outlet, useNavigate } from "react-router-dom";
import useFetch from "../Hook/useFetch";

const HomePage = () => {

 
  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem("auth")}>
      <div className=" ">
        <Outlet/>
      </div>
    </PreventComponents>
  );
};
export default HomePage;