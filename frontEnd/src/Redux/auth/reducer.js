import { LOGIN_REQUEST, LOGOUT_REQUEST} from "./action";
import axios from "axios";

let initState={
    isAuth:false,
    message:"",
    token:""
}

let token=JSON.parse(localStorage.getItem("token"));
if(token){
    initState={
        ...initState,
        isAuth:true,
        message:"authenticated user!",
        token:token,
        // user:userDetails(token),
    }
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            // console.log(payload)
            localStorage.setItem("token",JSON.stringify(payload));
            return {
                ...state,
                isAuth:true,
                message:"Login successful",
                token:payload,
            }
        case LOGOUT_REQUEST:
            localStorage.removeItem("token");
            return {
                ...state,
                isAuth:false,
                message:"Loged out",
                token:""
            }
        default:
            return state;
    }
}

// function userDetails(token){
//     let user;
//     // console.log("userDetails",token);
//     axios.get("https://food-app-with-authentication.herokuapp.com/auth/",{
//         headers:{
//             "Authorization" : `Bearer ${token}`
//         }
//     })
//     .then((res)=>{
//         console.log("res.data.user",res.data.user)
//         user=res.data.user;
//         return user;
//     })
//     // console.log(user);
// }