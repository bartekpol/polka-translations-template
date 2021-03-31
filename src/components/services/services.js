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
                    <svg xmlns="http://www.w3.org/2000/svg" width="340" height="340" viewBox="0 0 340 340"><g transform="translate(-0.002 -0.001)"><path class="st0" d="M0,169c0,0.8,0,1.6,0,2.4h0.1c2.5,92.3,77.6,166.3,170,166.3s167.5-74,170-166.3h0.1c0-0.8,0-1.6,0-2.4c0-0.8,0-1.6,0-2.4h-0.1c-2.5-92.3-77.6-166.3-170-166.3S2.5,74.4,0.1,166.7H0C0,167.5,0,168.2,0,169z" fill="#c74624"/><path class="st1" d="M156.4,0.9c-18.8,1.5-36.8,6.1-53.4,13.3v128.1H2.5c-1.4,8-2.2,16.1-2.4,24.4H0c0,0.8,0,1.6,0,2.4c0,0.8,0,1.6,0,2.4h0.1c0.2,8.3,1,16.4,2.4,24.4H103v128.1c16.6,7.2,34.6,11.8,53.4,13.3V195.8h181.3c1.4-8,2.2-16.1,2.4-24.4h0.1c0-0.8,0-1.6,0-2.4c0-0.8,0-1.6,0-2.4h-0.1c-0.2-8.3-1-16.4-2.4-24.4H156.4V0.9z" fill="#fff"/></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="340" height="340" viewBox="0 0 340 340"><path class="st0" d="M0.7,170.4c0,0.8,0,1.6,0,2.4h0.1C3.2,265,78.4,339,170.8,339s167.5-74,170-166.3h0.1c0-0.8,0-1.6,0-2.4c0-0.8,0-1.6,0-2.4h-0.1c-2.5-92.3-77.6-166.3-170-166.3S3.2,75.8,0.8,168H0.7C0.7,168.8,0.7,169.6,0.7,170.4z" fill="#c74624"/><path class="st1" d="M170.8,1.2c93.9,0,170.1,76.6,170.1,171H0.7C0.7,77.8,76.8,1.2,170.8,1.2z" fill="#fff"/></svg>
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