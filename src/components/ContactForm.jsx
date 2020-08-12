import React, { useState } from 'react'
import '../assets/styles/components/ContactForm.scss'
import { connect } from 'react-redux'
import { setNotification, deleteNotification } from '../actions'

// "use strict";
// const nodemailer = require("nodemailer");

const ContactForm = ({ form, setNotification, deleteNotification }) => {
    const [formValues, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    const addNotify = (text) => {
        const id = Date.now()
        setNotification({
            id,
            text,
            clear: setTimeout(() => {
                deleteNotification(id)
            }, 5000)
        })
    }

    const onSend = event => {
        event.preventDefault()
        if (formValues.hasOwnProperty('name') && formValues.name && formValues.name.trim()) {
            if (formValues.hasOwnProperty('email') && formValues.email && formValues.email.trim()) {
                if (validarEmail(formValues.email.trim())) {
                    if (formValues.hasOwnProperty('message') && formValues.message && formValues.message.trim()) {
                        addNotify('Enviando Correo.')
                    }
                    else {
                        addNotify('Escribe un mensaje')
                    }
                }
                else
                    addNotify('Correo no valido')
            }
            else
                addNotify('Ingresa tu correo')
        }
        else
            addNotify('Ingresa tu Nombre')
        // setNotification({ id: Date.now(), text: "Hola, enviando correo" })
    }
    const onChangeForm = event => {
        setForm({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const REGEX_EMAIL = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const validarEmail = (email) => {
        return REGEX_EMAIL.test(email);
    }

    return (
        <form onSubmit={onSend} className="Contact__form" autoComplete="off" >
            <div className="textbox__primary Contact__txt--half">
                <input
                    className="textbox__primary-input"
                    type="text"
                    name="name"
                    onChange={onChangeForm}
                    placeholder={form.name}
                    value={formValues.name}
                />
                <div className="textbox__primary-ligth" />
            </div>
            <div className="textbox__primary Contact__txt--half">
                <input
                    className="textbox__primary-input"
                    type="text"
                    name="email"
                    onChange={onChangeForm}
                    placeholder={form.email}
                    value={formValues.email}
                />
                <div className="textbox__primary-ligth" />
            </div>
            <div className="textbox__primary Contact__txt">
                <input
                    className="textbox__primary-input"
                    type="text"
                    name="subject"
                    onChange={onChangeForm}
                    placeholder={form.subject}
                    value={formValues.subject}
                />
                <div className="textbox__primary-ligth" />
            </div>
            <div className="textbox__primary Contact__txt">
                <textarea
                    className="textbox__primary-textarea"
                    name="message"
                    onChange={onChangeForm}
                    placeholder={form.message}
                    value={formValues.message}
                />
                <div className="textbox__primary-ligth" />
            </div>
            <div className="Contact__send">
                <input className="button__primary" type="submit" value={form.send} />
            </div>
        </form>
    )
}

const mapDispatchToProps = {
    setNotification,
    deleteNotification,
}

export default connect(null, mapDispatchToProps)(ContactForm)