import React from "react";
import { useNavigate } from "react-router-dom";

const NevigationComponents = () => {
  const nav = useNavigate();
  return (
    <div className=" flex justify-between bg-slate-500 p-2 font-bold sticky top-0 z-50">
      <div>Contact App</div>
      <div className=" flex flex-row gap-4 underline">
        <button 
            onClick={()=>nav("/home/add")}
        >
            Add
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            nav("/");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default NevigationComponents;