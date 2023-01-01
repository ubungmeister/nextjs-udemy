import EventList from "../components/EventList";
import {getAllEvents, getFeaturedEv} from "../helpers/apiUtils";
import Head from "next/head";
import NewsLetterReg from "../components/inputs/NewsLetterReg";

export type EventType = {
    id: string
    date: string
    title: string
    description: string
    location: string
    isFeatured: boolean
    image: string
}
export type EventArrType = {
    events: EventType[]
}

export default function Home({events}: EventArrType) {


    return (
        <div className='bg-gray-100 min-h-screen'>
            <Head>
                <title>Events app</title>
                <meta name='description' content='Events....'/>
            </Head>
            <NewsLetterReg/>
            <ul>
                <EventList array={events}/>
            </ul>
        </div>

    )
}

export async function getStaticProps() {
    const events = await getAllEvents()
    return {
        props: {
            events: events
        },
        revalidate: 1
    }

}
