import React from "react";

const FromInputComponents = ({type,name,placeholder,label,value,onChange}) => {
  return (
    <div className=" grid grid-flow-row space-y-3 text-white">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="p-2 rounded-md text-black"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FromInputComponents;
