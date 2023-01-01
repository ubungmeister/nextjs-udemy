import React from 'react';
import {OneEventType} from "./EventItem";
import Head from "next/head";
import Image from "next/image";
import DateIcon from "./icons/date-icon";
import AddressIcon from "./icons/address-icon";



const EventDetail = ({event}:OneEventType) => {
    if (!event) {
        return <div>No event find!</div>
    }
    const {image, date, location, title, description} = event

    return (
        <div className='container mx-auto md:px-2 pt-16 w-1/2 mb-10'>
            <Head>
                <title>{event.title}</title>
                <meta name='description' content='Events....'/>
            </Head>
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

export default EventDetail;