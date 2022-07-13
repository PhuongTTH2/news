import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEY } from 'constants/index'
import axiosClients from 'api/rest/axiosClients'
export const getAccountScopes = createAsyncThunk('auth/getAccountScopes', async () => {

    axiosClients.defaults.headers.common['username'] = `${localStorage.getItem("username")}`;
    axiosClients.defaults.headers.common['access_token'] = `${localStorage.getItem("accessToken")}`;
    const data: any = await axiosClients.get('/account')
    localStorage.setItem(STORAGE_KEY.AUTH_CURRENT, JSON.stringify(data))
    return data
})

const authSlice = createSlice({
    name: 'account',
    initialState: {
        current: JSON.parse(localStorage.getItem(STORAGE_KEY.AUTH_CURRENT) ?? '{}'),
    },
    reducers: {},
    extraReducers: {
        [getAccountScopes.fulfilled as any]: (state, action) => {
            state.current = action.payload
        },
    },
})

const { reducer } = authSlice
export default reducer
