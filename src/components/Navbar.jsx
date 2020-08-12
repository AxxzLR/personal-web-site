import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from './MenuIcon'
import ToView from './ToView'
import '../assets/styles/components/Navbar.scss'
import Logo from '../assets/static/Logo.svg'
import { connect } from 'react-redux'
import { setContentLanguaje } from '../actions'

const Navbar = ({ navbar, Lang, socialMedia, setContentLanguaje }) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const men = document.querySelector(".Navbar__menuitems")
        const rs = document.querySelector(".Navbar__RS")
        if (isOpen) {
            men.classList.add("Navbar__menu-showed")
            rs.classList.add("Navbar__menu-showed")
        }
        else {
            men.classList.remove("Navbar__menu-showed")
            rs.classList.remove("Navbar__menu-showed")
        }
    }, [isOpen])

    const toggleMenu = () => setIsOpen(!isOpen)

    const closeMenu = () => setIsOpen(false)

    const toggleLang = () => {
        const nLang = Lang === 'es' ? 'en' : 'es'
        setContentLanguaje(nLang)
    }

    return (
        <div className="Navbar">
            <div className="Navbar__menu-icon">
                <MenuIcon stateOpen={isOpen} toogleAction={toggleMenu} />
            </div>
            <Link className="Navbar__logo" to="/">
                <img className="Navbar__logo" src={Logo} />
            </Link>
            <div className="Navbar__menuitems">
                {navbar.map(navbarItem => (
                    <ToView key={`menuitem__${navbarItem.view}`} callback={closeMenu} classContainer="Navbar__menuitem" view={navbarItem.view}>
                        <img src={navbarItem.icon} />
                        <span>{navbarItem.text}</span>
                    </ToView>
                ))}
            </div>
            <div className="Navbar__RS">
                {socialMedia.map(item => (
                    <a key={item.txt} href={item.url} target="_blank" rel="noopener noreferrer">
                        <img src={item.icon} alt={item.txt} />
                    </a>
                ))}
                <span onClick={toggleLang} >{Lang}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    Lang: state.contentLanguaje.Lang,
    navbar: state.contentLanguaje.content.navbar,
    socialMedia: state.contentLanguaje.content.socialMedia
})

const mapDispatchToProps = {
    setContentLanguaje,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)