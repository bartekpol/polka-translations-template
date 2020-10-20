import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../container/container';
import Input from './input';
import TextArea from './textarea';

import './contact.scss';

const Contact = ({title, formtitle, phone, email}) => {
    const { t } = useTranslation();
    return (
        <>
            <section className="contact" id="kontakt">
                <Container>
                    <h1>{title}</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="label">Email</div>
                            <div className="content">{email}</div>
                        </div>
                        <div className="contact-info-item">
                            <div className="label">Telefon</div>
                            <div className="content">{phone}</div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h2>{formtitle}</h2>
                        <form>
                            <Input type="text" label={t('Imię')} id="name"/>
                            <Input type="email" label={t('Email')} id="email"/>
                            <TextArea label={t('Wiadomość')} id="message" />
                            <div className="form-control">
                                <button type="submit" className="btn black" style={{float: 'right'}}>{`${t('Wyślij wiadomość.')}`}</button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact;