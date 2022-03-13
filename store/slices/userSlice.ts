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
    peakNumbers: number[]
    peakYearOld: number[]
    peakYear: number[]
}

const initialData: TUserSlice = {
    name: 'fakeName',
    birthDay: '2022-03-13',
    rulingNumber: 10,
    dateNumbers: [],
    peakNumbers: [],
    peakYearOld: [],
    peakYear: []
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
            state.peakNumbers[2] = Number(birthDay[0]) + Number(birthDay[1]) + Number(birthDay[2]) + Number(birthDay[3])
            state.peakNumbers[0] = Number(birthDay[5]) + Number(birthDay[6]) //Month
            state.peakNumbers[1] = Number(birthDay[8]) + Number(birthDay[9]) //Date
            state.peakNumbers[3] = state.peakNumbers[0] + state.peakNumbers[1] //Peak 1
            state.peakNumbers[4] = state.peakNumbers[1] + state.peakNumbers[2] //Peak 2
            state.peakNumbers[5] = state.peakNumbers[3] + state.peakNumbers[4] //Peak 3
            state.peakNumbers[6] = state.peakNumbers[0] + state.peakNumbers[2] //Peak 4

            for (let i = 0; i < state.peakNumbers.length; i ++) {
                if ((i<5 && state.peakNumbers[i].toString().length !== 1) || (i>4 && state.peakNumbers[i] !== 10 && state.peakNumbers[i] !== 11)) {
                    state.peakNumbers[i] = Number(state.peakNumbers[i].toString().charAt(0)) + Number(state.peakNumbers[i].toString().charAt(1))
                }
            }

            state.peakYearOld[0] = 36 - state.rulingNumber
            state.peakYearOld[1] = state.peakYearOld[0] + 9
            state.peakYearOld[2] = state.peakYearOld[1] + 9
            state.peakYearOld[3] = state.peakYearOld[2] + 9
            state.peakYear[0] = Number(birthDay.substring(0,4)) + state.peakYearOld[0]
            state.peakYear[1] = state.peakYear[0] + 9
            state.peakYear[2] = state.peakYear[1] + 9
            state.peakYear[3] = state.peakYear[2] + 9
        }
    },
})

/* 2. Export */
export const {setUserInfo} = userSlice.actions
export default userSlice.reducer

