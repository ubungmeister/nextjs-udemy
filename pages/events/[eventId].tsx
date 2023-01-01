import React from 'react';
import {getAllEvents, getSelectedEvent} from "../../helpers/apiUtils";
import {EventType} from "../index";
import EventDetail from "../../components/EventDetail";
import Comments from "../../components/inputs/comments/Comments";


type OneEventType ={
    event: EventType
}
const EventId = ({event}:OneEventType ) => {

    return(
        <>
            <EventDetail event={event}/>
            <Comments eventId={event.id}/>
        </>

    )

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