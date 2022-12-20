import {DUMMY_EVENTS} from "../dummy-daya";

export async function getAllEvents(){
    const response = await fetch('https://next-69190-default-rtdb.firebaseio.com/events.json')
    const data =await response.json()
    const transformedData = []
    for(const key in data){
        transformedData.push({
            id: key,
            ...data[key]
        })
    }
    return transformedData
}

export async function getFeaturedEv(){
    const allEvent = await getAllEvents()
    return allEvent.map((event)=>event.isFeatured === true)
}

export async function getSelectedEvent(id:string){
    const allEvent = await getAllEvents()
    return allEvent.find((event)=>event.id === id)
}

export async function getFilteredEvents(dateFilter:any) {
    const { year, month } = dateFilter;
    const allEvent = await getAllEvents()

    let filteredEvents = allEvent.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}
