import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClients from 'api/rest/axiosClients'
import {authHeaderAccount} from 'api/rest/header'
import apiGets from "api/rest/apiGets";
export const getAccountScopes = createAsyncThunk('auth/getAccountScopes', async (account: any) => {
    const data: any = await axiosClients.get(apiGets.getAccount,{ headers: authHeaderAccount(account) })
    return data.data
})

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: {},
    },
    reducers: {
        updateAccount:(state,action) =>{
            state.users = action.payload
        },
    },
    extraReducers: {
        [getAccountScopes.fulfilled as any]: (state, action) => {
            state.users = action.payload
        },
    },
})
export const {
    updateAccount
} = userSlice.actions
export default userSlice.reducer