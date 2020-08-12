import React from 'react'
import NotificationItem from './NotificationItem'
import '../assets/styles/components/Notifications.scss'
import { connect } from 'react-redux'
import { deleteNotification } from '../actions'

const Notifications = ({ Notifys, deleteNotification }) => {
    const handleCloseNotify = id => {
        deleteNotification(id)
    }
    return (
        <div className="Notifications">
            {Notifys.length > 0 &&
                Notifys.map(item => <NotificationItem key={item.id} {...item} onCloseNotify={handleCloseNotify} />)
            }
        </div>
    )
}

const mapStateToProps = state => (
    {
        Notifys: state.Notifys
    }
)

const mapDispatchToProps = {
    deleteNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)