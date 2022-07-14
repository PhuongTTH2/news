import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClients from 'api/rest/axiosClients'
import {authHeaderAccount} from 'api/rest/header'
import apiGets from "api/rest/apiGets";
export const getAccountScopes = createAsyncThunk('auth/getAccountScopes', async (account: any) => {
    localStorage.setItem("RefreshToken",account.RefreshToken)
    const data: any = await axiosClients.get(apiGets.getAccount,{ headers: authHeaderAccount(account) })
    return data
})

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: {},
    },
    reducers: {},
    extraReducers: {
        [getAccountScopes.fulfilled as any]: (state, action) => {
            state.users = action.payload
        },
    },
})
export default userSlice.reducer