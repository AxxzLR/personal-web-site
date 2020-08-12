import React, { useState, useEffect } from 'react'

const TimelineItem = ({ id, toLeft, Logo, Title, Period, Desc, callback }) => {
    const [isShowed, setShow] = useState(false)

    useEffect(() => {
        const x = document.getElementById(id)
        if (isShowed)
            x.classList.add("TimelineItem__content--show")
        else
            x.classList.remove("TimelineItem__content--show")
    }, [isShowed])

    const side = `TimelineItem__container ${toLeft ? "TimelineItem__left" : "TimelineItem__right"}`

    const handleOnClick = () => {
        if (callback)
            callback()
        setShow(!isShowed)
    }

    return (
        <div className={side} onClick={handleOnClick}>
            <div id={id} className="TimelineItem__content">
                <img className="TimelineItem__logo" src={Logo} />
                <p className="TimelineItem__title">{Title}</p>
                <p className="TimelineItem__period">{Period}</p>
                <pre className="TimelineItem__desc">{Desc}</pre>
            </div>
        </div>
    )
}

export default TimelineItem