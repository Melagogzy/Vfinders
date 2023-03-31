import { createSlice } from "@reduxjs/toolkit";


const wizard = '0';
export const wizardSlice = createSlice({
    name: "wizard",
    initialState: {value: wizard},

    reducers: {
        setWizard: (state, action) => {
            state.value = action.payload;
        }
    }
})
export const  {setWizard} = wizardSlice.actions;

export default wizardSlice.reducer;