import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* App Configs */}
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport"
                      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
                <meta name="description" content="Description"/>
                <meta name="keywords" content="Keywords"/>
                <title>Nhân Số Học</title>

                <link rel="manifest" href="/manifest.json"/>
                <link href="/ic_launcher.png" rel="icon" type="image/png" sizes="48x48"/>
                <link rel="apple-touch-icon" href="/icon.png"/>
                <meta name="theme-color" content="#92278f"/>

                {/* Font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
