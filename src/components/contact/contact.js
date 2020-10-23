import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
 
import Container from '../container/container';

import './contact.scss';

const handleFocus = e => e.target.parentNode.classList.add('focused');
const handleBlur = e => e.target.parentNode.classList.remove('focused');

const Contact = ({title, formtitle, phone, email}) => {
    const [recaptchaState, setRecaptchaState] = useState(null);
    const [formStatus, setFormStatus] = useState('test');
    console.log(formStatus)
    const recaptchaRef = React.createRef();
    const { t } = useTranslation();
    const { register, handleSubmit, formState, watch } = useForm({
        mode: 'all'
    });
    const onSubmit = data => {
        fetch("https://submit-form.com/OVcckMA7", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              ...data,
              "g-recaptcha-response": recaptchaState,
            }),
          })
            .then(function (response) {
                changeFormStatus('success')
                console.log(response);
            })
            .catch(function (error) {
                changeFormStatus('error')
                console.error(error);
            });
    };
    const handleChange = value => setRecaptchaState(value);
    const handleExpired = () => setRecaptchaState(null);
    const changeFormStatus = (status) => {
        setFormStatus(status);
        setTimeout(() => setFormStatus(null), 5000);
    }

    const { errors, dirtyFields, isValid } = formState;

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={`form-control input ${dirtyFields.name ? 'filled' : ''}`} onFocus={handleFocus} onBlur={handleBlur}>
                                <label htmlFor="name">{`${t('Imię')} ${errors.name ? ` - ${t('To pole jest wymagane!')}` : ''}`}</label>
                                <input type="text" name="name" id="name" ref={register({required: true})}/>
                            </div>
                            <div className={`form-control input ${dirtyFields.email ? 'filled' : ''}`} onFocus={handleFocus} onBlur={handleBlur}>
                                <label htmlFor="email">{`${t('Email')} ${errors.email ? errors.email.type === 'pattern' ? ` - ${t('Adres email jest nieprawidłowy!')}` : ` - ${t('To pole jest wymagane!')}` : ''}`}</label>
                                <input type="email" name="email" id="email" ref={register({required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                            </div>
                            <div className={`form-control textarea ${dirtyFields.message ? 'filled' : ''}`} onFocus={handleFocus} onBlur={handleBlur}>
                                <label htmlFor="message">{`${t('Wiadomość')} ${errors.message ? ` - ${t('To pole jest wymagane!')}` : ''}`}</label>
                                <textarea name="message" id="message" ref={register({required: true})}/>
                            </div>
                            <div className="form-control submit">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LdB29kZAAAAAFIR-P0Hmh3fr7w1UKj4iImG0mby"
                                    onChange={handleChange}
                                    onExpired={handleExpired}
                                />
                                <button type="submit" className="btn black" style={{float: 'right'}} disabled={!(isValid && recaptchaState !== null)}>{`${t('Wyślij wiadomość.')}`}</button>
                                <div>
                                    {formStatus === 'success' && <div style={{color: 'green'}}>{`Wiadomość została pomyślnie wysłana.`}</div>}
                                    {formStatus === 'error' && <div style={{color: 'red'}}>{`Wystąpił problem podczas wysyłania wiadomości.`}</div>}
                                    {console.log(formStatus)}
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact;