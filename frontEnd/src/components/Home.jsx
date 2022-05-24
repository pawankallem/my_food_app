
// https://www.themealdb.com/api/json/v1/1/categories.php

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

export const Home = () =>{

    const [data,setData] = useState([]);
    const [isAuth,setIsAuth]=useState(false);
    const [user,setUser]=useState([])

    useEffect(()=>{

        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res)=>{
            setData(res.data.categories)
            console.log(data)
        })
        
    },[])

    const handleClick=()=>{
        let token=JSON.parse(localStorage.getItem("token"));
        // console.log(token)
        axios.get("https://food-app-with-authentication.herokuapp.com/auth/",{
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data)
            setIsAuth(true);
            setUser(res.data.user)
        })
    }

    return <>
    
    <h1 id="title">Food App</h1>
    <br />
    <button onClick={handleClick}>{ !isAuth ? "Authenticate User" : `hello ${user.name}` }</button>
    <br />
    <br />
    <div id="mainDiv">

        {
            data.map((elem)=>{
                
                return <div key={elem.idCategory} className="dishContent">

                    <h2>{elem.strCategory}</h2>
                    <img src={elem.strCategoryThumb} alt="" />
                    <p>{elem.strCategoryDescription}</p>
                </div>
            })
        }
    </div>
    
    </>
}