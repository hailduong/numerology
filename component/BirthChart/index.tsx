import {useRouter} from 'next/router'
import a from '../RulingNumber/RulingNumber.module.css'
import s from './BirthChart.module.scss'
import {BIRTH_DATE_NUMBER_MEANING} from '../../database/birthDateNumber'
import {useAppSelector} from '../../store/hooks'

const BirthChartComponent = () => {

    const router = useRouter()
    const dateNumbers = useAppSelector(state => state.user.dateNumbers)

    const numberForUI = []
    for (let i = 1; i < 10; i++) {
        numberForUI[i] = i.toString().repeat(dateNumbers[i])
    }

    let explanationNumbers = [
        {
            title: '',
            meaning: ''
        }
    ]

    for (let i = 0; i < 10; i++) {
        const numberOfNumber = dateNumbers[i]
        explanationNumbers[i] = BIRTH_DATE_NUMBER_MEANING[i]?.[numberOfNumber] || null
    }

    const explanation = explanationNumbers.map(value => {
        return (
            <div key={value?.title}>
                <h2>{value?.title}</h2>
                <div>{value?.meaning}</div>
            </div>
        )
    })


    /* Render */
    return (
        <main className={s.main}>
            {/* Header */}
            <header className={a.rulTitle}>
                <a onClick={() => {
                    router?.push('/ruling-number')
                }}>
                    <div className={a.rulBack}/>
                </a>
                <div>BIỂU ĐỒ NGÀY SINH</div>
            </header>
            <div className={s.pageWrapper}>
                {/* Birth Chart */}
                <div className={s.birthChart}>
                    <div className={s.three}>{numberForUI[3]}</div>
                    <div className={s.six}>{numberForUI[6]}</div>
                    <div className={s.nine}>{numberForUI[9]}</div>
                    <div className={s.two}>{numberForUI[2]}</div>
                    <div className={s.five}>{numberForUI[5]}</div>
                    <div className={s.eight}>{numberForUI[8]}</div>
                    <div className={s.one}>{numberForUI[1]}</div>
                    <div className={s.four}>{numberForUI[4]}</div>
                    <div className={s.seven}>{numberForUI[7]}</div>
                </div>

                {/* Explanation*/}
                <div className={s.numberExplanation}>{explanation}</div>
            </div>
            <nav className={a.rulNavigation}>
                <a onClick={() => {
                    router?.push('/ruling-number')
                }}>
                    <div>Ruling</div>
                </a>
                <a onClick={() => {
                    router?.push('/birth-chart')
                }}>
                    <div> BirthChart</div>
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

export default BirthChartComponent