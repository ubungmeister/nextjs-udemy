

import EventList from "../../components/EventList";
import {getFilteredEvents} from "../../helpers/apiUtils";


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

    if(!events || events.length === 0){
        return <p>No events found</p>
    }
    return(
        <EventList array={events}/>
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
