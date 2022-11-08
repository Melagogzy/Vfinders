import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {value: []},
    reducers: {
        login: (state, action) => {},
        logout: (state, action) => {},
        signup: (state, action) => {},
        userProfile: (state, action) => {},
        userWaitlist: (state, action) => {},
    }

})

export default userSlice.reducer