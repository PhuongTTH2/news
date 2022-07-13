import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export const isAdminSelector = createSelector(
    (state: RootState) => state.account,
    (account) => {
        return account
    },
)
