import React from "react";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./pages/LogIn.page";
import HomePage from "./pages/Home.page";
import RegisterPage from "./pages/Register.page";
import ContainerComponents from "./components/ContainerComponents";
import NevigationComponents from "./components/Nevigation.Components";
import ContactPage from "./pages/Contact.Page";
import ContactAddPage from "./pages/ContactAdd.page";
import DetailContactPage from "./pages/DetailContact.page";

const App = () => {
  return (
    <ContainerComponents>
      <NevigationComponents />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage/>}/>
          <Route path="/home/add" element={<ContactAddPage/>}/>
          <Route path="/home/contact/:id" element={<DetailContactPage/>}/>
        </Route>
      </Routes>
    </ContainerComponents>
  );
};

export default App;
