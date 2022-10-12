import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route ,Routes } from "react-router-dom";
//import FormScreen from "../screens/FormScreen";
const NavControl = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<h1>asdad</h1>}>Home</Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default NavControl