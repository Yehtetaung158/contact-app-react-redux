import { api } from "./Api"


export const Register=async(FormData)=>{
    try{
        const data=await api.post("register",FormData)
        return data
        
    }catch(e){
        return {error:true,msg:e.message}
    }
}

export const Login=async(FormData)=>{
    try{
        const res=await api.post("login",FormData)
        const {data}=res
        if(data.token){
            // console.log(data.token);
            localStorage.setItem("auth",JSON.stringify(data.token))
        }
        return res
        
    }catch(e){
        return {error:true,msg:e.message}
    }
}

export const GetContact=async()=>{
    try{
        const res=await api.get("contact")
        const {data}=res
        return res
        
    }catch(e){
        return {error:true,msg:e.message}
    }
}
