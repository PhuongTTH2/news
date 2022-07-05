import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEY } from 'constants/index'
import axiosClient from 'api/rest/axiosClient'

export const getAccountScopes = createAsyncThunk('auth/getAccountScopes', async (accountId: string) => {
    const data: any = await axiosClient.get('/api/users/2')
    localStorage.setItem(STORAGE_KEY.AUTH_CURRENT, JSON.stringify(data))
    return data
})

const authSlice = createSlice({
    name: 'auth',
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
