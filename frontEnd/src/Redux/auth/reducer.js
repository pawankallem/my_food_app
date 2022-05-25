import { LOGIN_REQUEST, LOGOUT_REQUEST} from "./action";

let initState={
    isAuth:false,
    token:""
}

let token=JSON.parse(localStorage.getItem("token"));
if(token){
    initState={
        ...initState,
        isAuth:true,
        message:"",
        token:token
    }
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            console.log(payload)
            localStorage.setItem("token",JSON.stringify(payload.token));
            return {
                ...state,
                isAuth:true,
                message:"Login successful",
                token:payload.token
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