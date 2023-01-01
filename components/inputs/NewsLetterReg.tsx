import React, {FormEvent, useContext, useRef} from 'react';
import NotificationContext from "../../store/NotificationContext";

const NewsLetterReg = () => {
    const userEmail = useRef<HTMLInputElement | null>(null)
    const notificationCtx = useContext(NotificationContext)
    const onRegisterHandler =(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const enteredEmail = userEmail.current?.value

        notificationCtx.showNotification({
            title:'Pending',
            message:'Registering for the newsletter',
            status:'pending'
        })
        // console.log(enteredEmail)
        fetch('/api/newsLetter',{
            method:'POST',
            body: JSON.stringify({email:enteredEmail}),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response)=> {
            if(response.ok){
                return response.json()
            }
            return response.json().then((data=>{
                throw new Error(data.message)
            }))
        })
            .then((data)=>{
            notificationCtx.showNotification({
                title:'Success',
                message:'Registered for the newsletter',
                status:'success'
            })})
            .catch(error =>{
                notificationCtx.showNotification({
                    title:'Error',
                    message:'Fail to register',
                    status:'error'
                })
        })
        }


    return (
        <form onSubmit={(e)=>onRegisterHandler(e)}
            className='flex flex-row space-x-1 items-center justify-center py-7'>
            <input
                ref={userEmail}
                placeholder='Enter your email '
                className='px-2 py-1 hover:outline-none pl-4 border rounded'/>
            <button type={'submit'}
                className='bg-blue-400 text-white border rounded px-2 py-1 text-center'>Register</button>
        </form>
    )
};

export default NewsLetterReg;