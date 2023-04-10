import { createSlice } from "@reduxjs/toolkit";


const trxdata = '';
export const trxdataSlice = createSlice({
    name: "trxdata",
    initialState: {value: trxdata},

    reducers: {
        setTrxdata: (state, action) => {
            state.value = action.payload;
        }
    }
})
export const  {setTrxdata} = trxdataSlice.actions;

export default trxdataSlice.reducer;