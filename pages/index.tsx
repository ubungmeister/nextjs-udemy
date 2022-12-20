import EventList from "../components/EventList";
import {useRouter} from "next/router";
import {useState} from "react";
import {getAllEvents, getFeaturedEv} from "../helpers/apiUtils";

export type EventType={
    id: string
    date:string
    title:string
    description:string
    location:string
    isFeatured:boolean
    image:string
}
export type EventArrType = {
    events:EventType[]
}

export default function Home({events}:EventArrType) {


    return (
        <div className='bg-gray-100 min-h-screen'>
            <ul>
                <EventList array={events}/>
            </ul>
        </div>

    )
}

export async function getStaticProps(){
    const events = await getAllEvents()
    return {
        props: {
            events: events
        },
        revalidate: 1
    }

}
