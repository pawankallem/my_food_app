import React, { useEffect ,useState } from "react";
import {Link} from "react-router-dom";
import "./styles/Navbar.css";
import {useSelector,useDispatch} from "react-redux";
import {logoutRequest} from "../Redux/auth/action.js"
import {useNavigate} from "react-router-dom"
import axios from "axios";


export const Navbar=()=>{

    const state=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [user,setUser]=useState([])
    const [boolean,setBoolean]=useState(true);
    
    const handleLogout=()=>{
        // console.log("inside logout");
        dispatch(logoutRequest());
        alert("Logged out !");
        navigate("/login");
    }

    useEffect(()=>{
        if(state.isAuth){
            let token=state.token;
            axios.get("https://food-app-with-authentication.herokuapp.com/auth/",{
                headers:{
                    "Authorization" : `Bearer ${token}`
                }
            })
            .then((res)=>{
                // console.log(res.data)
                setUser(res.data.user)
                setBoolean(false);
            })
        }
    },[boolean])

    return (<div id="main-navbar">
        <Link to="/" className="button">Home</Link>
        {
            state.isAuth ? <button className="button">{`welcome ${user.name}`}</button> : <Link to="/register" className="button">Register</Link>
        }
        {
            state.isAuth ? <button onClick={handleLogout} className="button">Logout</button> : <Link to="/login" className="button">Login</Link>
        }
        
    </div>)
}