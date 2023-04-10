import { createSlice } from "@reduxjs/toolkit";


const tokendata = '';
export const tokendataSlice = createSlice({
    name: "tokendata",
    initialState: {value: tokendata},

    reducers: {
        setTokendata: (state, action) => {
            state.value = action.payload;
        }
    }
})
export const  {setTokendata} = tokendataSlice.actions;

export default tokendataSlice.reducer;