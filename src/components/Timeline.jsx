import React from 'react'
import TimelineItem from './TimelineItem'
import '../assets/styles/components/Timeline.scss'

const Timeline = ({ info }) => {
    return (
        <div className="Timeline">
            {info.map(item => (
                <TimelineItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default Timeline