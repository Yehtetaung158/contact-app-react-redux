import React, { useState } from "react";
import { CgClose, CgMoreAlt, CgDetailsMore } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hook/useFetch";
import { DetailContact } from "../service/contact.service";

const DropDownComponent = ({id ,data,handelDelete}) => {

    const nav=useNavigate()


  const [dropdown, setDropdown] = useState(true);
  const handleOpen = () => {
    setDropdown(!dropdown);
  };

  const handleDetail=async()=>{
        nav(`/home/contact/${id}`)
    }
   const handelEdit=()=>{
    nav(`/home/add`, {state:{edit:true , data}})
   } 

  return (
    <div>
      <div className="">
        <button
          id="dropdownMenuIconHorizontalButton"
          data-dropdown-toggle="dropdownDotsHorizontal"
          onClick={handleOpen}
          className={` absolute top-2 right-2  inline-flex items-center p-2 text-sm font-medium text-center`}
          type="button"
        >
          {dropdown ? (
            <CgMoreAlt className=" text-2xl" />
          ) : (
            <CgClose className=" text-2xl" />
          )}
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownDotsHorizontal"
          className={`${
            dropdown && " hidden"
          } z-10  absolute right-0 divide-y rounded-lg bg-slate-500`}
        >
          <ul
            className="py-2 text-sm text-white rounded-lg"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <button onClick={handleDetail}
                href="#"
                className=" px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2"
              >
                <CgDetailsMore className=" text-2xl" />
                Detail
              </button>
            </li>
            <li>
              <button
                onClick={handelEdit}
                href="#"
                className=" px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2"
              >
                <CiEdit className=" text-2xl" />
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={()=>handelDelete(id)}
                href="#"
                className=" px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2"
              >
                <MdDeleteOutline className=" text-2xl" />
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownComponent;
