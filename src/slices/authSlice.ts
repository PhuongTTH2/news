import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'account',
    initialState: {
        current: {
            currentUser:null,
            isFetching: false,
            error:false
        },
    },
    reducers: {
        loginStart:(state) =>{
            state.current.isFetching = true
        },
        loginSuccess:(state, action) =>{
            state.current.currentUser = action.payload
            state.current.isFetching = false
        },
        loginError:(state, action) =>{
            state.current.error = true
            state.current.isFetching = false
        },
        logoutSuccess:(state, action) =>{
            state.current.currentUser = null
            state.current.error = false
            state.current.isFetching = false
        }
    },
})
export const {
    loginStart,
    loginSuccess
} = authSlice.actions
export default authSlice.reducer;
