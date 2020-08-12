import React from 'react'
import close from '../assets/static/close-icon.svg'

const NotificationItem = ({ text, onCloseNotify, id }) => (
    <div className="NotificationItem">
        <pre className="NotificationItem__text">{text}</pre>
        <img className="NotificationItem__close" src={close} alt="close" onClick={() => onCloseNotify(id)} />
    </div>
)

export default NotificationItem