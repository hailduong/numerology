import s from './BirthChart.module.css'
import {useRouter} from 'next/router'
import a from '../RulingNumber/RulingNumber.module.css'
import {BIRTH_DATE_NUMBER_MEANING} from '../../database/birthDateNumber'
import {useAppSelector} from '../../store/hooks'

const BirthChartComponent = () => {
    const dateNumbers = useAppSelector(state => state.user.dateNumbers)

    const numberForUI = []

    for (let i = 1; i < 10; i++) {
        numberForUI[i] = i.toString().repeat(dateNumbers[i])
    }

    let explanationNumbers = [
        {
            title: 'abc',
            meaning: 'abc'
        }
    ]

    for (let i = 0; i < 10; i++) {
        const numberOfNumber = dateNumbers[i]
        explanationNumbers[i] = BIRTH_DATE_NUMBER_MEANING[i]?.[numberOfNumber] || null
    }

    const getExplanationNumbers = explanationNumbers.map(value => {
        return (
            <div key={value?.title}>
                <h2>{value?.title}</h2>
                <div>{value?.meaning}</div>
            </div>
        )
    })
    const router = useRouter()

    return (
        <main className={s.main}>
            <header className={a.rulTitle}>
                <a onClick={() => {
                    router?.push('/ruling-number')
                }}>
                    <div className={a.rulBack}></div>
                </a>
                <div>BIỂU ĐỒ NGÀY SINH</div>
            </header>
            <div className={s.wrapper}>
                <div className={s.three}>{numberForUI[3]}</div>
                <div className={s.two}>{numberForUI[6]}</div>
                <div className={s.nine}>{numberForUI[9]}</div>
                <div className={s.two}>{numberForUI[2]}</div>
                <div className={s.two}>{numberForUI[5]}</div>
                <div className={s.two}>{numberForUI[8]}</div>
                <div className={s.one}>{numberForUI[1]}</div>
                <div className={s.two}>{numberForUI[4]}</div>
                <div className={s.seven}>{numberForUI[7]}</div>
            </div>

            <div className={s.explainNumber}>{getExplanationNumbers}</div>

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
                <div>Peaks</div>
            </nav>
        </main>
    )
}

export default BirthChartComponent