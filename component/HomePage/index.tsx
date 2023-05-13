import s from './HomePage.module.scss'
import {useAppDispatch} from '../../store/hooks'
import {useState} from 'react'
import {setUserInfo} from '../../store/slices/userSlice'
import {useRouter} from 'next/router'
import Image from 'next/image'

const HomePage = () => {

    const dispatch = useAppDispatch()

    const [nameUser, setNameUser] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [isBirthDateError, setIsBirthDateError] = useState(false)
    const [isNameUserError, setIsNameUserError] = useState(false)

    const router = useRouter()

    let isValid = true

    let checkBirthDate: RegExp = /^(19|20)\d{2}[\-\.\/](0[1-9]|1[0-2])[\-\.\/](0[1-9]|[12]\d|3[0-1])/g
    let checkName: RegExp = /([A-Z]*[a-z]*)\s?/g


    const handleClick = () => {
        dispatch(setUserInfo({
            name: nameUser,
            birthDay: birthDate,
        }))
        router.push('/ruling-number')
    }

    const handleValidClick = () => {

        if (!checkBirthDate.test(birthDate.trim())) {
            isValid = false
            setIsBirthDateError(true)
        } else if (!checkName.test(nameUser.trim())) {
            isValid = false
            setIsNameUserError(true)
        }

        isValid && handleClick()
    }

    /* Render */
    return (
        <main className={s.homeContainer}>
            <div className={s.background}>
                <Image src={'/Home Main Image.png'} layout={'intrinsic'} width={233} height={233} alt={''}/>
                <h1 className={s.numTitle}>THẦN SỐ HỌC</h1>
                <div>Hãy khám phá chính mình thông qua những con số với môn khoa học thần số học nhé!</div>
                <form className={s.inputForm}>
                    <div className="input-group mb-3">
                        <input type="text" className={`form-control ${isBirthDateError ? 'is-invalid' : 'is-valid'}`}
                               placeholder="yyyy-mm-dd"
                               onChange={(e) => setBirthDate(e.target.value)}/>
                        {isBirthDateError ?
                            <div className="invalid-feedback">Please provide a valid birthday</div> : null}
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" value={nameUser}
                               className={`form-control ${isNameUserError ? 'is-invalid' : 'is-valid'}`}
                               placeholder="Nguyen Van A"
                               onChange={(e) => setNameUser(e.target.value)}/>
                        {isNameUserError ? <div className='invalid-feedback'>Please provide valid full name</div> : null}
                    </div>
                    <a className={`btn ${s.btnSubmit}`} href="#" role="button" onClick={handleValidClick}>Xem Kết
                        Quả</a>
                </form>
            </div>
        </main>
    )
}

export default HomePage
