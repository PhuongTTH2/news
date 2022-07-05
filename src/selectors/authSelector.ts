import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export const isAdminSelector = createSelector(
    (state: RootState) => state.auth,
    (auth) => {
            // console.log(auth)
        return auth
    },
)
