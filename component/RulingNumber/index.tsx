import s from './RulingNumber.module.css'
import {useAppSelector} from "../../store/hooks";
import {useRouter} from "next/router";
import {RULING_NUMBER_MEANING} from "../../store/slices/userSlice";

const RulingNumberComponent = () => {
    const rulingNumber = useAppSelector((state) => state.user.rulingNumber)

    const getRulingNumberMeaning = RULING_NUMBER_MEANING.find(({number}) => number === rulingNumber)?.meaning

    const router = useRouter()
    return (
        <main>
            <header className={s.rulTitle}>
                <button onClick={() => {
                    router?.push('/')
                }}>{`<`}</button>
                <div> Ruling Number</div>
            </header>
            <div className={s.rulContent}>
                <div className={s.rulBorder}>
                    <div className={s.rulNumber}>{rulingNumber}</div>
                </div>
                <div className={s.rulExplain}>{getRulingNumberMeaning}</div>
            </div>
            <nav className={s.rulNavigation}>
                <div>Ruling</div>
                <div>BirthChart</div>
                <div>Peaks</div>
            </nav>
        </main>
    )
}

export default RulingNumberComponent