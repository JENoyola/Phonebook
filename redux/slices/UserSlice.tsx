import {createSlice} from "@reduxjs/toolkit";
import {  InitialUserState } from "../../interfaces/UserInterface";

const UserReducer = createSlice({
    name : "user",
    initialState : {user : InitialUserState},
    reducers : {
        setUser : (state,action) => {
            state.user = action.payload
        },

        deleteUser : () => {}
    }
})

export const {setUser,deleteUser} = UserReducer.actions;

export default UserReducer.reducer;