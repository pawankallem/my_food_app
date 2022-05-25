
// https://www.themealdb.com/api/json/v1/1/categories.php

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import {useSelector} from "react-redux"

export const Home = () =>{

    const [data,setData] = useState([]);
    const [user,setUser]=useState([])
    const state=useSelector((state)=>state.auth);

    useEffect(()=>{
        console.log(state);
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res)=>{
            setData(res.data.categories)
            console.log(data)
        })

        if(state.isAuth){
            let token=state.token;
            axios.get("https://food-app-with-authentication.herokuapp.com/auth/",{
                headers:{
                    "Authorization" : `Bearer ${token}`
                }
            })
            .then((res)=>{
                console.log(res.data)
                setUser(res.data.user)
            })
        }
        
    },[])

    return <>
    
    <h1 id="title">Food App</h1>
    <br />
    <button>{ !state.isAuth ? "Authenticate User" : `hello ${user.name}` }</button>
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