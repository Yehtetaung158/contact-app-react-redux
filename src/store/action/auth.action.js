import { Login, Register } from "../../service/auth.service";

export const LoginAction=async ( dispatch,FormData)=>{
    try{
        dispatch({type:"process"});
        const res=await Login(FormData);
        if(res.data){
            dispatch({type:"login",payload:res.data})
        }else{
            dispatch({type:"error",payload:res.msg})
        }
    }
    catch(e){
        dispatch({type:"error",payload:res.msg})
    }
}

export const RegisterAction=async ( dispatch,FormData)=>{
    try{
        dispatch({type:"process"});
        const res=await Register(FormData);
        if(res.data){
            dispatch({type:"register",payload:res.data})
        }else{
            dispatch({type:"error",payload:res.msg})
        }
    }
    catch(e){
        dispatch({type:"error",payload:res.msg})
    }
}