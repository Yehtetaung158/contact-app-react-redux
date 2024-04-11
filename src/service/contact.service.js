import { api } from "./Api"


export const AddContact=async(FormData)=>{
    try{
        const res=await api.post("contact",FormData)
        // const {data}=res
        return res
        
    }catch(e){
        return {error:true,msg:e.message}
    }
}

export const EditContact=async(id,formData)=>{
    try{
        const res=await api.put(`contact/${id}`,formData)
        // const {data}=res
        return res
        
    }catch(e){
        return {error:true,msg:e.message}
    }
}

export const DetailContact=async(id)=>{
    try{
        const res=await api.get(`contact/${id}`)
        // const {data}=res
        return res
        
    }catch(e){
        return {error:true,msg:e.message}
    }
}

export const DeleteContact=async(id)=>{
    try{
        const res=await api.delete(`contact/${id}`)
        if(res){
            return true
        }
        
    }catch(e){
        return {error:true,msg:e.message}
    }
}