import s from './HomePage.module.css'
import {useAppDispatch} from '../../store/hooks'
import {useState} from 'react'
import {setUserInfo} from '../../store/slices/userSlice'
import {useRouter} from "next/router";

const HomePage = () => {

    const dispatch = useAppDispatch()

    const [nameUser, setNameUser] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const router = useRouter()

    const handleClick = () => {
        dispatch(setUserInfo({
            name: nameUser,
            birthDay: birthDate,
        }))
        router.push('/ruling-number')
    }

    /* Render */
    return (
        <main className={s.homeContainer}>
            <div className={s.background}>
                <h1 className={s.numTitle}>NUMEROLOGY</h1>
                <form className={s.inputForm}>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" onChange={(e) => setBirthDate(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" value={nameUser} className="form-control" placeholder="Name..."
                               onChange={(e) => setNameUser(e.target.value)}/>
                    </div>
                    <a className={`btn ${s.btnSubmit}`} href="#" role="button" onClick={handleClick}>VIEW RESULTS</a>
                </form>
            </div>
        </main>
    )
}

export default HomePage
