import {createSlice} from "@reduxjs/toolkit";
import {userList} from "../data/Data";


const userSlice=createSlice({
    name:"users",
    initialState:userList,
    reducers:{
       addUser:(state,action)=>{
        state.push(action.payload);
       },
       updateuser:(state,action)=>{
        const {id,name,email}=action.payload;
        const uu=state.find(user=>user.id==id);
        if(uu){
            uu.name=name;
            uu.email=email;
        }
        },
        deleteuser:(state,action)=>{
        
        const {id}=action.payload;
        const uu=state.find(user=>user.id==id);
        if(uu){
           return state.filter(f=>f.id!=id);
        }

        }

    }
});

export const {addUser,updateuser,deleteuser} = userSlice.actions;
export default userSlice.reducer;
