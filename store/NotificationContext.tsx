import React, {createContext, useEffect, useState} from 'react';

export type NotificationType = {
    title: string
    message: string
    status: string
    children?: React.ReactNode
}

const NotificationContext =  createContext({
    notification:{title:'',status:'',message:''},
    showNotification:function(notificationData:NotificationType){},
    hideNotification(){}
})
export function NotificationContextProvider(props:any){

    const [activeNotification, setActiveNotification]=useState<NotificationType>({title:'',status:'',message:''})
    function showNotificationHandler(notificationData:NotificationType){
        setActiveNotification(notificationData)
    }
    function hideNotificationHandler(){
        setActiveNotification({title:'',status:'',message:''})
    }

    useEffect(()=>{
        if(activeNotification.status === 'success'){
            const timer = setTimeout(()=>{
                setActiveNotification({title: '', status: '', message: ''})
            },3000)
            return()=>{
                clearTimeout(timer)
            }
        }
    },[activeNotification])

    const context = {
        notification:activeNotification,
        showNotification:showNotificationHandler,
        hideNotification:hideNotificationHandler
    }

    return(
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
}
export default NotificationContext
// const NotificationContext = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default NotificationContext;