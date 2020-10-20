import React from 'react';
import ReactMarkdown from 'react-markdown'
import Container from '../container/container';

import './about.scss';
import aboutImg from '../../images/about.png';
import aboutDots from '../../images/about-dots.png';

const AboutMe = ({content}) => {
    return (
        <section className="about-me" id="o-mnie">
            <Container>
                <div className="about-content-left">
                    <ReactMarkdown source={content} />
                </div>
                <div className="about-content-right">
                    <img src={aboutImg} />
                    <img src={aboutDots} />
                </div>
            </Container>
        </section>
    )
}

export default AboutMe;