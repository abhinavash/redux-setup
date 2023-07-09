import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0};  //state

export const showSlice = createSlice({
    name:"showData",
    initialState,
    reducers:{
        showData: (state ) => {
            state.value = state.value;
        },
        //these are the action
        increment: (state) => {
            state.value = state.value+1;
        },
        incrementByTen: (state, action) => {
            state.value = state.value + action.payload;
        }
    }
});

export const {showData,increment,incrementByTen} = showSlice.actions;
export default showSlice.reducer;