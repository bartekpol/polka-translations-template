import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useTranslation } from 'react-i18next';

import Container from '../container/container';
import './hero.scss';

const Hero = ({ heroText }) => {
    const { t } = useTranslation();
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <Container>
                    <div className="hero-text">
                        <h1>
                            { heroText }
                        </h1>
                    </div>
                    <div className="hero-button">
                        <AnchorLink to="/#oferta" className="btn">{`${t('Sprawdź ofertę.')}`}</AnchorLink>
                    </div>
                </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48.084" height="48.084" viewBox="0 0 48.084 48.084"><path d="M-9950,34V0h2V32h32v2Z" transform="translate(7035.713 -7011.671) rotate(-45)" fill="#fff"/></svg>
        </section>
    )
}

export default Hero;