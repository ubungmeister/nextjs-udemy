import React from 'react';
type CommentsArrType ={
    comments: CommentType[]
}
export type CommentType={
    name:string
    text:string
    _id:string //we use _ underscore because we fetch _id from mongodb not id
}

const CommentsList = (props:CommentsArrType) => {
    console.log(props.comments)
    return (
        <div>
            <ul>{props.comments.map((el)=>
                <li key={el._id}>{el.name}---{el.text}</li>
            )}</ul>
        </div>
    );
};

export default CommentsList;