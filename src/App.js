import React, { useEffect } from "react";
import  './App.css'

import FormScreen from "./screens/FormScreen";
import { BrowserRouter } from "react-router-dom";
import { Route ,Routes } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import LoginRegisterScreen from "./screens/LoginRegisterScreen";

const App = ()=> {

    const url = "https://jsonplaceholder.typicode.com/posts";
    const fetchApiData = async ()=>{
        
        const response = await fetch(`${url}`);
        const data = await response.json();
        console.log(data);
    }
    useEffect(()=>{
       // fetchApiData();
       // const response = 
    },[])

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<FormScreen/>}>Form</Route>
        <Route path="/LoginRegisterScreen" element = {<LoginRegisterScreen/>}>LoginRegister</Route>
        <Route path="/DashboardScreen" element = {<DashboardScreen/>} id="0">Dash</Route>
      </Routes>
    </BrowserRouter>
    );
}



export default App;