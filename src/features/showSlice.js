import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0};  //state

export const showSlice = createSlice({
    name:"showData",
    initialState,
    reducers:{
        showData: (state ) => {
            state.value = state.value;
        }
        //these are the action
    }
});

export const {showData} = showSlice.actions;
export default showSlice.reducer;