import {createSlice, PayloadAction} from '@reduxjs/toolkit'

/* 1. Slice */

type TUserData = {
    name: string
    birthDay: string
}

type TUserSlice = {
    name: string,
    birthDay: string,
    rulingNumber: number
}

const initialData: TUserSlice = {
    name: 'fakeName',
    birthDay: 'fakeBD',
    rulingNumber: 10
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialData,
    reducers: {
        setUserInfo: (state, userData: PayloadAction<TUserData>) => {

            const {birthDay, name} = userData.payload

            state.birthDay = birthDay
            state.name = name

        }
    },
})

/* 2. Export */
export const {setUserInfo} = userSlice.actions
export default userSlice.reducer