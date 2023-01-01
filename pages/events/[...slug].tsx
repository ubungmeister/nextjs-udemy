

import EventList from "../../components/EventList";
import {getFilteredEvents} from "../../helpers/apiUtils";
import Head from "next/head";


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

function  FilteredEvents ({events}:EventArrType){

    const pageHeadData = (
        <Head>
            <title>Filtered events</title>
            <meta name='description' content='Events...'/>
        </Head>
    )

    if(!events || events.length === 0){
        return (
            <>
            {pageHeadData}
            <p>No events found</p>
            </>
        )
    }
    return(
        <div>
            {pageHeadData}
            <EventList array={events}/>
        </div>
    )

}

export async function getServerSideProps(context:any){

    const {params} =context
    const filteredData = params.slug
    const filteredYear = +filteredData[0]
    const filteredMonth = +filteredData[1]

    if(
        isNaN(filteredYear)||
        isNaN(filteredMonth)||
        filteredYear < 2021 ||
        filteredYear >2030 ||
        filteredMonth >12 ||
        filteredMonth<1
    ) {
       return{notFound:true}
       }


    const filteredEvents =await getFilteredEvents({
        year:filteredYear,
        month:filteredMonth
    })


    return{
        props:{
            events:filteredEvents
        }
    }
}

export default FilteredEvents
