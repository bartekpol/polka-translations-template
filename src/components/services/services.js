import React from 'react'
import ReactMarkdown from 'react-markdown'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useTranslation } from 'react-i18next'

import Container from '../container/container'

import './services.scss'

const Services = ({title, service1, service2}) => {
    const { t } = useTranslation();
    return (
        <section className="services" id="oferta">
            <Container>
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="services-content-left">
                    <ReactMarkdown source={service1} />
                </div>
                <div className="flags">
                    <svg xmlns="http://www.w3.org/2000/svg" width="415" height="355" viewBox="0 0 415 355"><g transform="translate(-0.002 -0.001)"><path d="M82.92,251.018a174.034,174.034,0,0,1-17.553-76.423C65.367,78.17,143.457,0,239.785,0S414.2,78.17,414.2,174.595s-78.09,174.593-174.419,174.593A173.456,173.456,0,0,1,150.6,324.669C77.974,352,0,353.921,0,353.921,65.375,317.945,79.9,266.968,82.92,251.018Z" transform="translate(0)" fill="#c74624"/><path d="M107.339,335.362V200.84H2.031a176.958,176.958,0,0,1,0-53.461H107.339V12.857A173.237,173.237,0,0,1,160.738,0V147.379H346.843a176.956,176.956,0,0,1,0,53.461H160.738V348.219A173.237,173.237,0,0,1,107.339,335.362Z" transform="translate(65.68 0.553)" fill="#fff"/></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="414.533" height="353.921" viewBox="0 0 414.533 353.921"><path d="M65.365,179.328A174.036,174.036,0,0,1,82.918,102.9C79.9,86.954,65.373,35.977,0,0,0,0,77.972,1.923,150.6,29.253A173.459,173.459,0,0,1,239.784,4.734C336.113,4.734,414.2,82.9,414.2,179.328S336.113,353.921,239.784,353.921,65.365,275.753,65.365,179.328Z" transform="translate(414.534 353.921) rotate(180)" fill="#c74624"/><path d="M174.767,0c96.521,0,174.767,79.185,174.767,176.865H0C0,79.185,78.246,0,174.767,0Z" transform="translate(0 0)" fill="#fff"/></svg>
                </div>
                <div className="services-content-right">
                    <ReactMarkdown source={service2} />
                </div>
                <div className="contact-link">
                    <div className="contact-link-container">
                        <span>{t('Masz pytania dotyczące oferty?')}</span>
                        <AnchorLink to="/#kontakt" className="btn" style={{float: 'right'}}>{t('Skontaktuj się ze mną.')}</AnchorLink>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Services