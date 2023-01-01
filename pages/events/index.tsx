import React, {useState} from 'react';

import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";
import {useRouter} from "next/router";
import {getAllEvents} from "../../helpers/apiUtils";
import {EventArrType} from "../index";
import Head from "next/head";

type SearchType = {
    selectedYear:string
    selectedMonth:string
}

const AllEventsPage = ({events}:EventArrType) => {


    const router = useRouter()

   const handleOnSearch = (year:string, month:string)=>{
       const fullPath = `/events/${year}/${month}`
       router.push(fullPath)
    }
    return (
        <div>
            <Head>
                <title>Events app</title>
                <meta name='description' content='Events....'/>
            </Head>
            <div className='bg-gray-200 min-h-screen '>
                <EventSearch onSearch={handleOnSearch}/>
                <EventList array={events}/>
            </div>
        </div>
    );
};

export async function getStaticProps(){
    const events = await getAllEvents()
    return {
        props: {
            events: events
        },
        revalidate: 1
    }

}

export default AllEventsPage;