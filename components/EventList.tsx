import EventItem from "./EventItem";

export type PropsType = {
    id: string
    title: string
    description:string
    location:string
    date: string
    image: string
    isFeatured: boolean
}
export type ArrPropsType={
    array: PropsType[]
}

const EventList = ({array}:ArrPropsType) => {

    return (
        <div className='container mx-auto justify-center rounded-md'>
        <ul className='grid md:grid-cols-1 gap-6 w-4/12 mx-auto rounded-lg'>
            {array.map((event)=>(
                <EventItem key={event.id} event={event}/>
            ))}
        </ul>
        </div>
    );
};

export default EventList;