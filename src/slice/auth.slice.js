import { createSlice } from "@reduxjs/toolkit"


const initialState={
    auth: false,
    data : null,
    loading:false,
    error:null
}

const authSlice= createSlice({
    name : "auth",
    initialState,
    reducers:{
        processing:(state)=>{
            state.loading=true;
        },
        error:(state)=>{
            state.loading=false,
            state.error=action.payload;
        },
        login:(state)=>{
            state.loading=true,
            state.error=null,
            state.data=action.payload
        },
        logout:(state)=>{
            state.loading=false,
            state.error=null,
            state.auth=false
        }
    }
})

export const {}=authSlice.actions;
export default authSlice.reducer