import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useRouter} from "next/router";
import {useState} from "react";
import Image from "next/image";
import {setUserInfo} from "../../store/slices/userSlice";
import {NAME_USER_CONVERT_NUMBER} from "../../database/nameUserMeaning";
import {types} from "sass";
import String = types.String;

const NameChart = () => {

    const nameUser = useAppSelector((state) => state.user.name).trim()
    const letterOfNameUser = nameUser.split("")


    let convertName = []
    let convertLetter = ''

    for (let i = 0; i < letterOfNameUser.length; i++) {
        convertName[i] = NAME_USER_CONVERT_NUMBER.find(letter => {
            for (let j = 0; j < letter.letter.length; j++) {
                convertLetter = letter.letter.find(x => x === letter.letter[j])
            }
        })
    }
    const nameUserConvertToNumber = letterOfNameUser.map(letter => NAME_USER_CONVERT_NUMBER.find(letter => letter))

    return (
        <></>
    )
}

export default NameChart