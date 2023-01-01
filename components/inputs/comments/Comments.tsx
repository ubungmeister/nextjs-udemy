import React, {useContext, useEffect, useState} from 'react';
import NewComment, {InputType} from "./NewComment";
import {json} from "stream/consumers";
import CommentsList from "./CommentsList";
import NotificationContext from "../../../store/NotificationContext";

export type CommentType = {
    eventId: string
}

const Comments = ({eventId}: CommentType) => {

    const [showComment, setShowComment] = useState(false)
    const [comments, setComments] = useState([])
    const [isFetching, setIsFetching] =useState(false)
    const notificationCtx = useContext(NotificationContext)

    function commentsHandler(data: InputType) {
        notificationCtx.showNotification({
            title: 'Pending',
            message: 'Posting your comment',
            status: 'pending'
        })
        fetch(`/api/comments/${eventId}`, {
            method: 'POST',
            body: JSON.stringify({email: data.email, name: data.name, text: data.text}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if(response.ok){
                return response.json()
            }
            return response.json().then((data=>{
                throw new Error(data.message)
            }))
        })
            .then((data) => {
                notificationCtx.showNotification({
                    title:'Success',
                    message:'Comment posted',
                    status:'success'
                })
            }).catch(error =>{
            notificationCtx.showNotification({
                title:'Error',
                message:'Fail to register',
                status:'error'
            })
        })
    }

    useEffect(() => {
        if (showComment) {
            setIsFetching(true)
            fetch(`/api/comments/${eventId}`)
                .then((response) => response.json())
                .then((data) => {
                    setComments(data.comments)
                    setIsFetching(false)
                })
        }
    }, [showComment])


    return (
        <div className='flex flex-col items-center justify-center mb-10'>
            <button onClick={() => setShowComment(!showComment)}
                    className='border bg-blue-400 text-center px-2 py-1 rounded-md text-white'>
                {showComment ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComment && <NewComment comment={commentsHandler}/>}

            {showComment && !isFetching && <CommentsList comments={comments}/>}
            {showComment && isFetching && <div>Loading...</div>}
        </div>
    );
};

export default Comments;