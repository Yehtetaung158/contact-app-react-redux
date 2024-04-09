import { api } from "./Api"


export const Register=async(FormData)=>{
    try{
        const data=await api.post("register",FormData)
        return data
        
    }catch(e){
        throw new Error(e.message)
    }
}

export const Login=async(FormData)=>{
    try{
        const data=await api.post("login",FormData)
        return data
        
    }catch(e){
        return {error:true,msg:e.message}
    }
}