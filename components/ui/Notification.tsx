import React, {useContext} from 'react';
import NotificationContext from "../../store/NotificationContext";

export type NotificationType = {
    title: string
    message: string
    status: string
}
const Notification = () => {
    const notificationContext = useContext(NotificationContext)
    const activeNotification = notificationContext.notification
    const {title, status,message} = activeNotification
    let statusClasses = ``;

    if (status === 'success') {
        statusClasses = `bg-green-500`
    }

    if (status === 'error') {
        statusClasses = `bg-red-500`
    }

    if (status === 'pending') {
        statusClasses = `bg-blue-500`
    }

    return (
        <>
            {activeNotification &&
                <div onClick={notificationContext.hideNotification}
                    className={`${statusClasses} fixed flex justify-between px-52 bottom-0 left-0 h-10 w-full text-white`}>
                    <div>{title}</div>
                    <div>{message}</div>
                </div>
            }

        </>
    );
};

export default Notification;
