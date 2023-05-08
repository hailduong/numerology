import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {store} from '../store/store'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
        <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9582074421885717"
            strategy="afterInteractive"
        />
    </Provider>
}

export default MyApp
