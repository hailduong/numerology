import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {store} from '../store/store'
import { Analytics } from '@vercel/analytics/react';

function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
    </Provider>
}

export default MyApp
