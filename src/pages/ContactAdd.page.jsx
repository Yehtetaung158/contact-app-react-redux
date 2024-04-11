import React, { useEffect, useState } from "react";
import FromInputComponents from "../components/FromInput.components";
import ButtonComponents from "../components/Button.components";
import useFetch from "../Hook/useFetch";
import { AddContact, EditContact } from "../service/contact.service";
import { useLocation, useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    editLoading: false,
  });
  const { handleDel, loading, data, error } = useFetch(AddContact);
  const handleOnchange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormData = async (e) => {
    e.preventDefault();
    if (location?.state?.edit) {
      setFormData((pre) => ({
        ...pre,
        editLoading: true,
      }));
      const res = await EditContact(location.state.data.id, formData);
      if (res) {
        nav("/home");
      }
      return res;
    } else {
      const res = await handleDel(formData);
      if (res) {
        nav("/home");
      }
      return res;
    }
  };
  useEffect(() => {
    (async () => {
      if (location?.state?.edit) {
        // console.log(location.state.data)
        const { name, phone, email, address } = location.state.data;
        setFormData((pre) => ({
          ...pre,
          name: name,
          phone: phone,
          email: email,
          address: address,
        }));
      }
    })();
  }, [data]);

  return (
    <div className="max-sm:w-full max-md:w-3/5 w-1/3 max-xl:w-2/4 mx-auto max-sm:h-screen  max-sm:px-3">
      <form
        onSubmit={handleFormData}
        className="container flex flex-col space-y-12 relative"
      >
        <h1 className=" font-bold text-white">
          {location?.state?.edit ? (
            <h1>Update Contact</h1>
          ) : (
            <h1>Add Contact</h1>
          )}
        </h1>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-1 left-10 right-10"
            role="alert"
          >
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline">
              Something seriously bad happened.
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
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
          value={formData.phone}
          onChange={handleOnchange}
          label={"Phone No"}
          name={"phone"}
          type={"number"}
          placeholder={"959123456789"}
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
          value={formData.address}
          onChange={handleOnchange}
          label={"Address"}
          name={"address"}
          type={"text"}
          placeholder={"Mandalay,Burma"}
        />
        <ButtonComponents type="submit">
          {loading ? (
            <>
              <h1>Loading....</h1>
            </>
          ) : (
            <>
              {location?.state?.edit ? (
                <>
                  {" "}
                  {formData.editLoading ? (
                    <>
                      <h1>Loading</h1>
                    </>
                  ) : (
                    <>
                      {" "}
                      <h1>Update</h1>
                    </>
                  )}
                </>
              ) : (
                <>
                  <h1>Add</h1>{" "}
                </>
              )}
            </>
          )}
        </ButtonComponents>
      </form>
    </div>
  );
};

export default ContactAddPage;
