import '../styles/globals.css'
import type {AppProps} from 'next/app'
import MainHader from "../components/layout/MainHader";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <MainHader/>
            <Component {...pageProps} />
        </>
    )
}
