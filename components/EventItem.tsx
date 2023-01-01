import {PropsType} from "./EventList";
import Link from "next/link";
import Button from "./ui/Button";
import DateIcon from "./icons/date-icon";
import AddressIcon from "./icons/address-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";
import Image from "next/image";
export type OneEventType = {
    event: PropsType
}

const EventItem = ({event}: OneEventType) => {
    const {id, title, date, location, image} = event
    const formDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formAddress = location
    const exploreLink = `/events/${id}`
    return (
        <li className='bg-white rounded-lg	transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-100 duration-300'>
            <div className='aspect-w-16 aspect-h-9'>
                <Image
                    className="images rounded-t-lg object-cover h-64 w-full"
                    src={'/' + image} alt={''}
                    width={400} height={400}
                />
            </div>
            <div className='bg-gray-200 py-2 px-2 rounded-b'>
                <div className='my-0.5'>
                    <h1 className='font-semibold text-md'>{title}</h1>
                </div>
                <div className='flex gap-2 my-0.5'>
                    <DateIcon/>
                    <time>{formDate}</time>
                </div>
                <div className='flex gap-2 my-0.5'>
                    <AddressIcon/>
                    <address>{formAddress}</address>
                </div>
                <div className='flex gap-2 my-0.5 cursor-pointer'>
                    <ArrowRightIcon/>
                    <Button
                        exploreLink={exploreLink}>
                        Explore
                    </Button>
                </div>
            </div>

        </li>
    );
};

export default EventItem;