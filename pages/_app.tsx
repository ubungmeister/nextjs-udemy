import '../styles/globals.css'
import type {AppProps} from 'next/app'
import MainHader from "../components/layout/MainHader";
import Head from "next/head";
import Notification from "../components/ui/Notification";
import {NotificationContextProvider} from "../store/NotificationContext";

export default function App({Component, pageProps}: AppProps) {
    return (
        <NotificationContextProvider >
            <Head>
                <title>Events app</title>
                <meta name='description' content='Next.js events app'/>
                <meta name='viewport' content='initial-scale=1.0'/>
            </Head>
            <MainHader/>
            <Component {...pageProps} />
            <Notification/>
        </NotificationContextProvider>
    )
}
