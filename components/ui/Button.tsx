import React from 'react';
import Link from "next/link";

export type ButtonType ={
    exploreLink?: string
    children:any
    onClick?:any
}

const Button = (props:ButtonType) => {
    if(props.exploreLink){
        return (
            <Link href={props.exploreLink}>{props.children}</Link>
        );
    }
    return <button onClick={props.onClick}>{props.children}</button>

};

export default Button;