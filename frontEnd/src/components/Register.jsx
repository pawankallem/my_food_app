import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const init={
    name:"",
    email:"",
    password:""
}

export const Register=()=>{
    const [reg,setReg]=useState(init);
    const navigate = useNavigate();

    const handleChange=(e)=>{
        // console.log(e.target.value)
        const {id,value} = e.target
        setReg({...reg,[id]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://food-app-with-authentication.herokuapp.com/user/register",reg)
        .then((res)=>{
            // console.log(res.data)
            alert(res.data.message)
            navigate("/login")
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
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" id="name" onChange={handleChange} />
                <label > Email</label>
                <input type="text" id="email" onChange={handleChange}/>
                <label >Password</label>
                <input type="text" id="password" onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}