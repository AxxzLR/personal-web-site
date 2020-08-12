import React from 'react'
import Services from './Services'

const SkillItem = ({ title, icon, titleDots, dots, text, services, titleServices }) => {
    return (
        <div className="skillItem__container">
            <div className="skillitem__header">
                <img src={icon} alt={title} />
                <p>{title}</p>
            </div>
            <div className="skillitem__desc">
                <pre>{text}</pre>
                <div className="skillitem__desc-sw">
                    <p>{titleDots}</p>
                    <ul className="skillitem__swlist">
                        {dots.map(item => (
                            <li key={item.id}>
                                {item.text}
                                {
                                    item.icon &&
                                    <img src={item.icon} alt={item.text} />
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
                (services && services.length > 0) &&
                <Services services={services} titleServices={titleServices} />
            }
        </div>
    )
}

export default SkillItem