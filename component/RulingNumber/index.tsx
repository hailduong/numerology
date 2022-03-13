import s from './RulingNumber.module.css'
import {useAppSelector} from '../../store/hooks'
import {useRouter} from 'next/router'
import {RULING_NUMBER_MEANING} from '../../database/rulingNumber'
import Image from 'next/image'

const RulingNumberComponent = () => {
    const rulingNumber = useAppSelector((state) => state.user.rulingNumber)
    const getRulingNumberMeaning = RULING_NUMBER_MEANING.find(({number}) => number === rulingNumber)?.meaning

    const router = useRouter()

    /* Render */
    return (
        <main>
            <header className={s.rulTitle}>
                <a onClick={() => {
                    router?.push('/')
                }}>
                    <div className={s.rulBack}/>
                </a>
                <div>CON SỐ CHỦ ĐẠO</div>
            </header>
            <div className={s.pageWrapper}>
                <div className={s.rulWrapper}>
                    <Image src={'/Star.png'} layout={'intrinsic'} width={200} height={200} className={s.rulContent}
                           alt={''}/>
                    <div className={s.rulNumber}>{rulingNumber}</div>

                </div>
                <div className={s.rulExplain}>{getRulingNumberMeaning}</div>
            </div>
            <nav className={s.rulNavigation}>
                <a onClick={() => {
                    router?.push('/ruling-number')
                }}>
                    <div>Ruling</div>
                </a>
                <a onClick={() => {
                    router?.push('/birth-chart')
                }}>
                    <div>BirthChart</div>
                </a>
                <a onClick={() => {
                    router?.push('/peaks')
                }}>
                    <div>Peaks</div>
                </a>
            </nav>
        </main>
    )
}

export default RulingNumberComponent