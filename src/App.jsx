import React from "react";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./pages/LogIn.page";
import HomePage from "./pages/Home.page";
import RegisterPage from "./pages/Register.page";
import ContainerComponents from "./components/ContainerComponents";
import NevigationComponents from "./components/Nevigation.Components";

const App = () => {
  return (
    <ContainerComponents>
      <NevigationComponents/>
    <Routes>
      <Route path="/" element={<LogInPage/>}/>      
      <Route path="/home" element={<HomePage/>}/>      
      <Route path="/register" element={<RegisterPage/>}/>      
    </Routes>
    </ContainerComponents>
  );
};

export default App;
