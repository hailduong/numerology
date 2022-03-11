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
    dateNumbers: number[]
}

const initialData: TUserSlice = {
    name: 'fakeName',
    birthDay: 'fakeBD',
    rulingNumber: 10,
    dateNumbers: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialData,
    reducers: {
        setUserInfo: (state, userData: PayloadAction<TUserData>) => {

            const {birthDay, name} = userData.payload

            state.birthDay = birthDay
            state.name = name;

            ((birthDay: string) => {
                state.rulingNumber = Number(birthDay.charAt(0)) + Number(birthDay.charAt(1)) + Number(birthDay.charAt(2)) + Number(birthDay.charAt(3)) + Number(birthDay.charAt(5)) + Number(birthDay.charAt(6)) + Number(birthDay.charAt(8)) + Number(birthDay.charAt(9))
                if (state.rulingNumber.toString().length !== 1 && state.rulingNumber !== 10 && state.rulingNumber !== 11 && state.rulingNumber !== 22 && state.rulingNumber !== 1) {
                    const convertNumber = state.rulingNumber.toString()
                    state.rulingNumber = Number(convertNumber.charAt(0)) + Number(convertNumber.charAt(1))
                }
            })(birthDay)
            for (let i = 0; i < 10; i++) {
                state.dateNumbers[i] = birthDay.match(new RegExp(i.toString(), 'g'))?.length || 0
            }
        }
    },
})

/* 2. Export */
export const {setUserInfo} = userSlice.actions
export default userSlice.reducer

