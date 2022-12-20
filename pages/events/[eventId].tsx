import React from 'react';
import {useRouter} from "next/router";
import {DUMMY_EVENTS, getEventById, getFeaturedEvents} from "../../dummy-daya";
import DateIcon from "../../components/icons/date-icon";
import AddressIcon from "../../components/icons/address-icon";
import Image from 'next/image'
import {getAllEvents, getSelectedEvent} from "../../helpers/apiUtils";
import {type} from "os";
import {EventType} from "../index";


type OneEventType ={
    event: EventType
}
const EventId = ({event}:OneEventType ) => {


    if (!event) {
        return <div>No event find!</div>
    }
    const {image, date, location, title, description} = event

    return (
        <div className='container mx-auto md:px-2 py-16 w-1/2 mb-10'>
            <div className='justify-center flex mx-auto text-black font-semibold text-xl mb-6'>{title}</div>
            <Image className='justify-center mx-auto mb-2 max-h-96'
                   src={`/${image}`} height={500} width={700} alt='photo'/>
            <div className='justify-center flex gap-6 mb-3 mx-auto'>
                <div className='flex gap-2'>
                    <DateIcon/>
                    <div>{date}</div>
                </div>
                <div className='flex gap-2'>
                    <AddressIcon/>
                    <div>{location}</div>
                </div>

            </div>
            <div className='justify-center flex mx-auto text-black mb-2'>{description}</div>


        </div>
    );
};

export default EventId;

export  async function getStaticProps(context:any){
    const params = context.params.eventId
    const event = await getSelectedEvent(params)

    return {
        props: {
            event: event
        }, revalidate: 1
    }
}
export async function getStaticPaths(){
    const events = await getAllEvents()
    const ids = events.map((event:any)=>({params:{eventId:event.id}}))

    return {
        paths: ids,
        fallback: false
    }
}