

export const LOGIN_REQUEST="LOGIN_REQUEST";
export const LOGOUT_REQUEST="LOGOUT_REQUEST";

export const loginRequest=(payload)=>({type:LOGIN_REQUEST,payload});
export const logoutRequest=()=>({type:LOGOUT_REQUEST});
