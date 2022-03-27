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
    dateNumbersIsolate: number[]
    peakNumbers: number[]
    peakYearOld: number[]
    peakYear: number[]
    arrowBirthChart: number[]
    nonArrowBirthChart: number[]
    personalYearNumber: number
}

const initialData: TUserSlice = {
    name: 'fakeName',
    birthDay: '2022-03-13',
    rulingNumber: 10,
    dateNumbers: [],
    dateNumbersIsolate: [],
    peakNumbers: [],
    peakYearOld: [],
    peakYear: [],
    arrowBirthChart: [],
    nonArrowBirthChart: [],
    personalYearNumber: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialData,
    reducers: {
        setUserInfo: (state, userData: PayloadAction<TUserData>) => {

            const {birthDay, name} = userData.payload

            state.birthDay = birthDay
            state.name = name;

            // Update Ruling Number
            ((birthDay: string) => {
                state.rulingNumber = Number(birthDay.charAt(0)) + Number(birthDay.charAt(1)) + Number(birthDay.charAt(2)) + Number(birthDay.charAt(3)) + Number(birthDay.charAt(5)) + Number(birthDay.charAt(6)) + Number(birthDay.charAt(8)) + Number(birthDay.charAt(9))
                if (state.rulingNumber.toString().length !== 1 && state.rulingNumber !== 10 && state.rulingNumber !== 11 && state.rulingNumber !== 22 && state.rulingNumber !== 1) {
                    const convertNumber = state.rulingNumber.toString()
                    state.rulingNumber = Number(convertNumber.charAt(0)) + Number(convertNumber.charAt(1))
                }
            })(birthDay)

            // Update birth chart numbers
            for (let i = 0; i < 10; i++) {
                state.dateNumbers[i] = birthDay.match(new RegExp(i.toString(), 'g'))?.length || 0
            }

            // Check isolate number
            let isUnavailableNumber = []
            for (let i = 0; i < state.dateNumbers.length; i++) {
                isUnavailableNumber[i] = state.dateNumbers[i] === 0
            }
            if (isUnavailableNumber[5] && isUnavailableNumber[2] && !isUnavailableNumber[1] && isUnavailableNumber[4]) {
                state.dateNumbersIsolate[1] = state.dateNumbers[1]
            }
            if (isUnavailableNumber[5] && isUnavailableNumber[2] && !isUnavailableNumber[3] && isUnavailableNumber[6]) {
                state.dateNumbersIsolate[3] = state.dateNumbers[3]
            }
            if (!isUnavailableNumber[7] && isUnavailableNumber[4] && isUnavailableNumber[5] && isUnavailableNumber[8]) {
                state.dateNumbersIsolate[7] = state.dateNumbers[7]
            }
            if (isUnavailableNumber[5] && isUnavailableNumber[8] && !isUnavailableNumber[9] && isUnavailableNumber[6]) {
                state.dateNumbersIsolate[9] = state.dateNumbers[9]
            }

            // Find arrows
            const isArrow123 = (!isUnavailableNumber[1] && !isUnavailableNumber[2] && !isUnavailableNumber[3]) ? 123 : 0
            const isArrow456 = (!isUnavailableNumber[4] && !isUnavailableNumber[5] && !isUnavailableNumber[6]) ? 456 : 0
            const isArrow789 = (!isUnavailableNumber[7] && !isUnavailableNumber[8] && !isUnavailableNumber[9]) ? 789 : 0
            const isArrow147 = (!isUnavailableNumber[1] && !isUnavailableNumber[4] && !isUnavailableNumber[7]) ? 147 : 0
            const isArrow258 = (!isUnavailableNumber[2] && !isUnavailableNumber[5] && !isUnavailableNumber[8]) ? 258 : 0
            const isArrow369 = (!isUnavailableNumber[6] && !isUnavailableNumber[9] && !isUnavailableNumber[3]) ? 369 : 0
            const isArrow159 = (!isUnavailableNumber[1] && !isUnavailableNumber[5] && !isUnavailableNumber[9]) ? 159 : 0
            const isArrow357 = (!isUnavailableNumber[3] && !isUnavailableNumber[5] && !isUnavailableNumber[7]) ? 357 : 0

            const isArrow = [isArrow123, isArrow456, isArrow789, isArrow147, isArrow258, isArrow369, isArrow159, isArrow357]

            for (let i = 0; i < isArrow.length; i++) {
                state.arrowBirthChart[i] = isArrow[i]
            }

            const isNonArrow123 = (isUnavailableNumber[1] && isUnavailableNumber[2] && isUnavailableNumber[3]) ? 123 : 0
            const isNonArrow456 = (isUnavailableNumber[4] && isUnavailableNumber[5] && isUnavailableNumber[6]) ? 456 : 0
            const isNonArrow789 = (isUnavailableNumber[7] && isUnavailableNumber[8] && isUnavailableNumber[9]) ? 789 : 0
            const isNonArrow147 = (isUnavailableNumber[1] && isUnavailableNumber[4] && isUnavailableNumber[7]) ? 147 : 0
            const isNonArrow258 = (isUnavailableNumber[2] && isUnavailableNumber[5] && isUnavailableNumber[8]) ? 258 : 0
            const isNonArrow369 = (isUnavailableNumber[6] && isUnavailableNumber[9] && isUnavailableNumber[3]) ? 369 : 0
            const isNonArrow159 = (isUnavailableNumber[1] && isUnavailableNumber[5] && isUnavailableNumber[9]) ? 159 : 0
            const isNonArrow357 = (isUnavailableNumber[3] && isUnavailableNumber[5] && isUnavailableNumber[7]) ? 357 : 0

            const isNonArrow = [isNonArrow123, isNonArrow456, isNonArrow789, isNonArrow147, isNonArrow258, isNonArrow369, isNonArrow159, isNonArrow357]

            for (let i = 0; i < isArrow.length; i++) {
                state.nonArrowBirthChart[i] = isNonArrow[i]
            }

            // Update peak numbers: e.g.
            enum EPeakNumbers {
                MONTH,
                DAY,
                YEAR,
                PEAK1,
                PEAK2,
                PEAK3,
                PEAK4
            }

            state.peakNumbers[EPeakNumbers.YEAR] = Number(birthDay[0]) + Number(birthDay[1]) + Number(birthDay[2]) + Number(birthDay[3])
            state.peakNumbers[EPeakNumbers.MONTH] = Number(birthDay[5]) + Number(birthDay[6]) //Month
            state.peakNumbers[EPeakNumbers.DAY] = Number(birthDay[8]) + Number(birthDay[9]) //Date
            state.peakNumbers[EPeakNumbers.PEAK1] = state.peakNumbers[0] + state.peakNumbers[1] //Peak 1
            state.peakNumbers[EPeakNumbers.PEAK2] = state.peakNumbers[1] + state.peakNumbers[2] //Peak 2
            state.peakNumbers[EPeakNumbers.PEAK3] = state.peakNumbers[3] + state.peakNumbers[4] //Peak 3
            state.peakNumbers[EPeakNumbers.PEAK4] = state.peakNumbers[0] + state.peakNumbers[2] //Peak 4

            for (let i = 0; i < state.peakNumbers.length; i++) {
                const isYearMonthDayPeaks = i < 5
                const isPeakNumberMultipleDigits = state.peakNumbers[i].toString().length > 1
                const isLastTwoPeaks = i > 4
                const isPeakNot10 = state.peakNumbers[i] !== 10
                const isPeakNot11 = state.peakNumbers[i] !== 11

                if (isYearMonthDayPeaks && isPeakNumberMultipleDigits) {
                    state.peakNumbers[i] = calculateSumOfDigitsPeak1And2(state.peakNumbers[i])
                } else if (isLastTwoPeaks && isPeakNot10 && isPeakNot11) {
                    state.peakNumbers[i] = calculateSumOfDigitsPeak3And4(state.peakNumbers[i])
                }
            }

            state.peakYearOld[0] = 36 - state.rulingNumber
            state.peakYearOld[1] = state.peakYearOld[0] + 9
            state.peakYearOld[2] = state.peakYearOld[1] + 9
            state.peakYearOld[3] = state.peakYearOld[2] + 9
            state.peakYear[0] = Number(birthDay.substring(0, 4)) + state.peakYearOld[0]
            state.peakYear[1] = state.peakYear[0] + 9
            state.peakYear[2] = state.peakYear[1] + 9
            state.peakYear[3] = state.peakYear[2] + 9

            const thisYear = new Date().getFullYear().toString()
            let yearNumber: number = 0
            for (let i = 0; i < thisYear.length; i++) {
                yearNumber = yearNumber + Number(thisYear[i])
            }
            state.personalYearNumber = yearNumber + state.peakNumbers[EPeakNumbers.MONTH] + state.peakNumbers[EPeakNumbers.DAY]
            while (state.personalYearNumber > 9) {
                state.personalYearNumber = Number(state.personalYearNumber.toString()[0]) + Number(state.personalYearNumber.toString()[1])
            }
        }
    },
})

/* 2. Export */
export const {setUserInfo} = userSlice.actions
export default userSlice.reducer

const calculateSumOfDigitsPeak1And2 = (number: number | string): number => {
    if (typeof number !== 'string') {
        number = number.toString()
    }

    let stringNumber: string = number

    while (stringNumber.length > 1) {
        let sum: number = 0
        for (let i = 0; i < stringNumber.length; i++) {
            sum = sum + Number(stringNumber[i])
        }
        stringNumber = sum.toString()
    }

    return Number(stringNumber)
}

const calculateSumOfDigitsPeak3And4 = (number: number | string): number => {
    if (typeof number !== 'string') {
        number = number.toString()
    }

    let stringNumber: string = number

    while (stringNumber.length > 1 && stringNumber !== '10' && stringNumber !== '11') {
        let sum: number = 0
        for (let i = 0; i < stringNumber.length; i++) {
            sum = sum + Number(stringNumber[i])
        }
        stringNumber = sum.toString()
    }

    return Number(stringNumber)
}