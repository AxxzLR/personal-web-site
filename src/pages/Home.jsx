import React from 'react'
import bgHome from '../assets/static/Home.jpg'
import '../assets/styles/Home.scss'
import { Link } from 'react-router-dom'
import ToView from '../components/ToView'
import Timeline from '../components/Timeline'
import TimelineItem from '../components/TimelineItem'
import ContactForm from '../components/ContactForm'
import Skills from '../components/Skills'
import { connect } from 'react-redux'

const Home = ({ info }) => (
    <>
        <div id="home" className="section--all">
            <img src={bgHome} className="Hero" />
            <div className="Hero__filter">
                <span className="Hero__text--main">{info.home.mainText}</span>
                <span className="Hero__text--secondary">{info.home.secondaryText}</span>
                <span className="Hero__mention">Photo by <a target="blank" href="https://unsplash.com/@danieljschwarz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Daniel J. Schwarz</a> on <a target="blank" href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                <ToView view="contact" classContainer="Hero__cta" >
                    <div className="button__primary">{info.home.cta}</div>
                </ToView>
            </div>
        </div>
        <div id="about" className="section--expasive">
            <div className="section__content">
                <div className="about">
                    <div className="about__content">
                        <p className="section__title">{info.about.title}</p>
                        <pre className="section__text" >{info.about.text}</pre>
                    </div>
                    <img className="about__selfie" src={info.about.img} alt="me" />
                </div>
            </div>
        </div>
        {/* <div id="work" className="section--expasive">
            <div className="section__content">
                <p className="section__title">{info.work.title}</p>
            </div>
            <Timeline info={info.work.timeline} />
        </div> */}
        <div id="services" className="section--expasive">
            <div className="section__content">
                <p className="section__title">{info.skills.title}</p>
            </div>
            <Skills info={info.skills.exp} titleServices={info.skills.titleServices} />
        </div>
        <div id="contact" className="section--expasive">
            <div className="section__content">
                <p className="section__title">{info.contact.title}</p>
                <pre className="section__text" >{info.contact.text}</pre>
            </div>
            <ContactForm form={info.contact.form} />
        </div>
    </>
)

const mapStateToProps = state => ({
    info: state.contentLanguaje.content
})

export default connect(mapStateToProps, null)(Home)