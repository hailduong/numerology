import s from '../RulingNumber/RulingNumber.module.css'
import Image from "next/image";
import {useRouter} from "next/router";
import a from './Peaks.module.scss'
import {useAppSelector} from "../../store/hooks";
import {PEAK_NUMBER_EXPLANATION} from "../../database/peakNumber";
import {ReactElement} from "react";
import YearChart from "../YearChart";
import {PERSONAL_YEAR_EXPLANATION} from "../../database/personalYearExplanation";

const PeaksComponent = () => {
    const router = useRouter()

    const peakNumber = useAppSelector(state => state.user.peakNumbers)
    const peakYearOld = useAppSelector(state => state.user.peakYearOld)
    const peakYear = useAppSelector(state => state.user.peakYear)
    const personalYear = useAppSelector(state => state.user.personalYearNumber)

    const personalYearDisplay = PERSONAL_YEAR_EXPLANATION.find(value => value.yearNumber === personalYear)

    const personalYearExplanation = () => {
        return (
            <div>
                <h2>{personalYearDisplay?.thisYear} - {personalYearDisplay?.title}</h2>
                <div>{personalYearDisplay?.meaning}</div>
            </div>
        )
    }

    const peakNo = peakNumber.slice(3,7)

    let peakMeaning = []
    for (let i = 0; i < 4; i++) {
        peakMeaning[i] = PEAK_NUMBER_EXPLANATION.find(value => value.peakNumber === peakNo[i])?.meaning
    }

    type TPeakAll = [
        {
            peakYear?: number
            peakYearOld?: number
            peakNumber?: number
            peakMean?: ReactElement
        }
    ]


    let peakAll: TPeakAll = [{}]
    for (let i = 0 ; i < 4; i++) {
        peakAll[i] = {
            peakYear: peakYear[i],
            peakYearOld: peakYearOld[i],
            peakNumber: peakNo[i],
            peakMean: peakMeaning[i] || undefined
        }
    }

    const peakMeaningComponent = peakAll.map(value => {
        return (
            <div key={value.peakYearOld}>
                <h2>ĐỈNH CAO SỐ {value.peakNumber} ({value.peakYear} - năm {value.peakYearOld} tuổi)</h2>
                <div className={a.peakExplain}>{value.peakMean}</div>
            </div>
        )
    })

    /* Render */
    return (
        <main>
            <header className={s.rulTitle}>
                <a onClick={() => {
                    router?.push('/ruling-number')
                }}>
                    <div className={s.rulBack}/>
                </a>
                <div>BỐN ĐỈNH CAO</div>
            </header>
            <div className={s.pageWrapper}>
                <div className={a.peakWrapper}>
                    <div className={a.peakFigure}>
                        <Image src={'/peaks.svg'} layout={'intrinsic'} width={300} height={300} className={s.rulContent}
                               alt={''}/>
                        <div className={a.peakNumber}>
                            <div className={a.peakMonthNumber}>{peakNumber[0]}</div>
                            <div className={a.peakDateNumber}>{peakNumber[1]}</div>
                            <div className={a.peakYearNumber}>{peakNumber[2]}</div>
                            <div className={a.peakNumber1}>{peakNumber[3]}</div>
                            <div className={a.peakNumber2}>{peakNumber[4]}</div>
                            <div className={a.peakNumber3}>{peakNumber[5]}</div>
                            <div className={a.peakNumber4}>{peakNumber[6]}</div>
                        </div>
                    </div>
                </div>
                <div className={a.peakExplain}>
                    {peakMeaningComponent}
                    <h2>BIỂU ĐỒ CHU KÌ 9 NĂM</h2>
                    <YearChart/>
                    {personalYearExplanation()}
                </div>
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

export default PeaksComponent