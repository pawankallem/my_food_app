import {Routes,Route} from "react-router-dom";
import {Home} from "../components/Home";
import {NotFound} from "../components/NotFound";
import { Register } from "../components/Register";
import {Login} from "../components/Login";
import React from "react";
import { Navbar } from "../components/Navbar";


export const Routers=()=>{

    return <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    
    </>
}