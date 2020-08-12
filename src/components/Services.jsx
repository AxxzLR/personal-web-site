import React, { useState, useEffect } from 'react'
import arrow from '../assets/static/arrow-icon.svg'
import '../assets/styles/components/Services.scss'

const Services = ({ services, titleServices }) => {
    const [IDService, setIDService] = useState(0)
    const lim = services.length

    useEffect(() => {
        const idtext = services[IDService].id
        selectService(idtext)
    }, [IDService])

    const selectService = id => {
        const x = document.getElementById(id)

        services.forEach(element => {
            const x = document.getElementById(element.id)
            if (element.id === id)
                x.classList.add("Service__item--show")
            else
                x.classList.remove("Service__item--show")
        });

        // x.classList.add("Service__item--show")
    }

    const next = () => {
        let nextID = IDService + 1
        if (nextID === lim)
            nextID = 0
        setIDService(nextID)
    }

    const prev = () => {
        let nextID = IDService - 1
        if (nextID === -1)
            nextID = lim - 1
        setIDService(nextID)
    }

    return (
        <div className="Service">
            <p className="Service__title">{titleServices}</p>
            <div className="Services__container">
                <div className="Service__prev">
                    <img src={arrow} alt="prev" onClick={prev} />
                </div>
                {services.map(item => (
                    <div id={item.id} key={item.id} className="Service__item">
                        <img src={item.icon} alt={item.title} />
                        <span>{item.title}</span>
                    </div>
                ))}
                <div className="Service__next">
                    <img src={arrow} alt="next" onClick={next} />
                </div>
            </div>
        </div>
    )
}

export default Services