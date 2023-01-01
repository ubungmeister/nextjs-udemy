import React, {FormEvent, useRef} from 'react';

type CommentType= {
    comment:(data:InputType)=>void
}
export type InputType={
    email?:string
    name?:string
    text?:string
}

const NewComment = (props:CommentType) => {

    const emailInputRef = useRef<HTMLInputElement|null>(null)
    const nameInputRef = useRef<HTMLInputElement|null>(null)
    const commentInputRef = useRef<HTMLInputElement|null>(null)

    const onCommentHandler =(event:FormEvent<HTMLFormElement>)=>{
            event.preventDefault()
            const email = emailInputRef.current?.value
            const name = nameInputRef.current?.value
            const text = commentInputRef.current?.value
            const data ={email,name,text}
            props.comment(data)
    }
    return (
        <form onSubmit={(e)=>onCommentHandler(e)}>
            <div className='flex-col justify-between items-center bg-blue-400 mt-8 mb-10 p-5 rounded-md'>
                <div className='flex mb-5 space-x-2'>
                    <div className='flex flex-row space-x-1 items-center'>
                        <h2 className='text-white font-semibold'>Your email</h2>
                        <input
                            ref={emailInputRef}
                            type='text'
                            className='rounded-md pl-2 py-1 focus:outline-none'/>
                    </div>
                    <div className='flex flex-row space-x-1 items-center'>
                        <h2 className='text-white font-semibold'>Your name</h2>
                        <input
                            ref={nameInputRef}
                            className='rounded-md pl-2 py-1 focus:outline-none'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-white font-semibold mb-1'>Your comment</h2>
                    <input
                        type="text"
                        ref={commentInputRef}
                        placeholder="Enter your Comment"
                        className=' h-32 p-4 hover:outline-none text-left
                        rounded-md pl-2 py-1 focus:outline-none '/>
                </div>
                <div className='mt-3 mb-12 '>
                    <button type={'submit'}
                        className=' float-right bg-white border rounded-md text-black px-2 py-1'>Publish</button>
                </div>

            </div>
        </form>
    );
};

export default NewComment;