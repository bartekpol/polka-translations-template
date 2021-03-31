import React, { useState, useEffect } from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import './header.scss';
import Logo from '../../images/logo.svg';
import Menu from './menu';

const Header = ({onToggleMenu}) => {
    const [scrollPosition, setScrollPosition] = useState(null);
    const [locationPathname, setLocationPathname] = useState(null);
    const { t } = useTranslation();
    const handleScroll = () => {
        const pos = window.pageYOffset;
        setScrollPosition(pos);
    }
    useEffect(() => {
        if(window === undefined) 
            return
        setLocationPathname(window.location.pathname)
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    const headerClassName = scrollPosition > 0 ? 'main-header fixed' : 'main-header';
    return (
        <header className={headerClassName}>
            <div className="left-menu">
                <Menu>
                    <li><AnchorLink to={locationPathname + "#home"} title={t('start')}>{t('start')}</AnchorLink></li>
                    <li><AnchorLink to={locationPathname +  "#oferta"} title={t('oferta tłumaczeń')}>{t('oferta tłumaczeń')}</AnchorLink></li>
                </Menu>
            </div>
            <div className="logo">
                {/* <img src={Logo} alt="Polka Translations"/> */}
                Polka Translations
            </div>
            <div className="right-menu">
                <Menu>
                    <li><AnchorLink to={locationPathname + "#o-mnie"} title={t('o mnie')}>{t('o mnie')}</AnchorLink></li>
                    <li><AnchorLink to={locationPathname + "#kontakt"} title={t('kontakt')}>{t('kontakt')}</AnchorLink></li>
                    <li className="lang-selector">
                        <Link to="/">DK </Link>
                        <Link to="/pl/">PL</Link>
                    </li>
                </Menu>
            </div>
            <div className="menu-btn-wrapper">
                <div className="menu-btn" onClick={onToggleMenu}>
                    <div className="line"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;