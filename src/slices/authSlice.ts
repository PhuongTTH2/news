import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'account',
    initialState: {
        current: {
            currentUser:{
                AccessToken:null,
                RefreshToken: null,
                username:null,
            },
            isFetching: false,
            error:false,
        },
    },
    reducers: {
        loginStart:(state) =>{
            state.current.isFetching = true
        },
        loginSuccess:(state, action) =>{
            state.current.currentUser.AccessToken = action.payload.AccessToken
            state.current.currentUser.RefreshToken = action.payload.RefreshToken
            state.current.currentUser.username = action.payload.username
            state.current.isFetching = false
        },
        loginError:(state, action) =>{
            state.current.error = true
            state.current.isFetching = false
        },
        logoutSuccess:(state, action) =>{
            state.current.error = false
            state.current.isFetching = false
        },
        refreshTokenSuccess:(state, action) =>{
            state.current.currentUser.AccessToken = action.payload
        }
    },
})
export const {
    loginStart,
    loginSuccess,
    refreshTokenSuccess
} = authSlice.actions
export default authSlice.reducer;
