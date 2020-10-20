import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import './mobile-menu.scss';

const MobileMenu = ({onToggleMenu}) => {
    const { t } = useTranslation();
    return (
        <div className="mobile-menu">
            <ul>
                <li onClick={() => onToggleMenu()}><AnchorLink to="/#home" title={t('start')}>{t('start')}</AnchorLink></li>
                <li onClick={() => onToggleMenu()}><AnchorLink to="/#oferta" title={t('oferta tłumaczeń')}>{t('oferta tłumaczeń')}</AnchorLink></li>
                <li onClick={() => onToggleMenu()}><AnchorLink to="/#o-mnie" title={t('o mnie')}>{t('o mnie')}</AnchorLink></li>
                <li onClick={() => onToggleMenu()}><AnchorLink to="/#kontakt" title={t('kontakt')}>{t('kontakt')}</AnchorLink></li>
                <li className="lang-selector" onClick={() => onToggleMenu()}>
                    <Link to="/">DK </Link>
                    <Link to="/pl/">PL</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu;