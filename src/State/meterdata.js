import { createSlice } from "@reduxjs/toolkit";


const meterdata = '';
export const meterdataSlice = createSlice({
    name: "meterdata",
    initialState: {value: meterdata},

    reducers: {
        setMeterdata: (state, action) => {
            state.value = action.payload;
        }
    }
})
export const  {setMeterdata} = meterdataSlice.actions;

export default meterdataSlice.reducer;