import {Line} from '@ant-design/plots'
import {DATA_PLOT} from "../../database/personalYearExplanation";
import s from '../Peaks/Peaks.module.scss'

const YearChart = () => {
    const config = {
        data: DATA_PLOT,
        padding: 'auto',
        xField: 'year',
        yField: 'scale',
        xAxis: {
            tickCount: 10,
        },
        yAxis: {
            tickCount: 6,
        },
        smooth: true,
    };
    // @ts-ignore
    return <Line {...config} />
}

export default YearChart
