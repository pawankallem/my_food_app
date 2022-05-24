
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const init={
    email:"",
    password:""
}

export const Login=()=>{
    const [login,setLogin]=useState(init);
    const navigate = useNavigate();

    const handleChange=(e)=>{
        // console.log(e.target.value)
        const {id,value} = e.target
        setLogin({...login,[id]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://food-app-with-authentication.herokuapp.com/user/login",login)
        .then((res)=>{
            localStorage.setItem("token",JSON.stringify(res.data.token))
            alert(res.data.message)
            // console.log(res.data)
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // if(state.isAuth){
    //     navigate("/")
    // }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label > Email</label>
                <input type="text" id="email" onChange={handleChange}/>
                <label >Password</label>
                <input type="text" id="password" onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}