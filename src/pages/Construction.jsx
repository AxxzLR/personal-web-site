import React from 'react'
import MaterialIcon from '../components/materialIcon'
import Logo from '../assets/static/Logo.svg'
import Settings from '../assets/static/settings.svg'
import '../assets/styles/Construction.scss'

const Construction = () => (
    <div className="section--all Construction">
        <div className="Construction__content">
            <img src={Logo} className="Construction__Logo" />
            <img src={Settings} className="Construction__icon anim-turn" />
            <p className="Construction__text anim-typewriter">Construyendo</p>
        </div>
    </div>
)

export default Construction