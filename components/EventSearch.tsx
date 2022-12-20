import React, {FormEvent, MutableRefObject, useRef} from 'react';
import Button from "./ui/Button";

export type SearchType = {
    onSearch:(selectedYear:string, selectedMonth:string)=>void
}
type ObjType ={
    selectedYear:string
    selectedMonth:string
}


const EventSearch = (props:SearchType) => {

    const yearInputRef = useRef<any>(null)
    const monthInputRef = useRef<any>(null)

    const submitHandler =(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const selectedYear = yearInputRef.current.value
        const selectedMonth = monthInputRef.current.value

        props.onSearch(selectedYear, selectedMonth)
    }
//'flex justify-center mx-auto my-10 w-4/12 bg-gray-100 rounded-xl'
    //md:px-1 py-4 my-1 flex gap-4
    return (
        <form className='my-5 bg-gray-100 rounded-xl w-max justify-center mx-auto'
            onSubmit={(e)=>submitHandler(e)}>
            <div className='md:px-1 py-4 my-1 flex gap-4 justify-center'>
                <div className='gap-2 flex '>
                    <label className='py-1'
                        htmlFor='year'>Year</label>
                    <select className='px-5 py-1 border border-solid border-gray-600 rounded-md'
                        id='year' ref={yearInputRef}>
                        <option className='mx-4' value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </div>
                <div className='gap-2 flex'>
                    <label className='py-1'
                        htmlFor='month' >Month</label>
                    <select className='px-5 py-1 border border-solid border-gray-600 rounded-md'
                        id='month' ref={monthInputRef}>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                    </select>
                </div>
                <button className='mx-4 text-black text-xl py-1 px-2 rounded-xl px-3 py-1 border-2 border-blue-300 bg-white '
                    type="submit"> Search</button>
            </div>
        </form>
    );
};

export default EventSearch;