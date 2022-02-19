import s from './HomePage.module.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {useEffect} from 'react'
import {setUserInfo} from '../../store/slices/userSlice'

const HomePage = () => {
    const name = useAppSelector((state) => state.user.name)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUserInfo({
            name: 'hello',
            birthDay: 'there'
        }))
    }, [])

    /* Render */
    return (
        <main className={s.homeContainer}>
            <div className={s.background}>
                <h1 className={s.numTitle}>NUMEROLOGY</h1>
                <form className={s.inputForm}>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Recipient's username"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Name..."/>
                    </div>
                    <a className={`btn ${s.btnSubmit}`} href="#" role="button">VIEW RESULTS {name}</a>
                </form>
            </div>
        </main>
    )
}

export default HomePage
