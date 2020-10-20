import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet';
import { useTranslation } from "react-i18next";
import '../i18n/i18n';

import AboutMe from "./about/about";
import Background from "./background/background";
import Header from "./header/header";
import Hero from "./hero/hero"
import Services from "./services/services";
import Contact from "./contact/contact";
import MobileMenu from "./mobile-menu/mobile-menu";
import Footer from "./footer/footer";

const Layout = ({lang}) => {

  const data = useStaticQuery(graphql`
  {
    pl: strapiMainpage {
      aboutSectionContent
      heroText
      spokenTranslationsContent
      translationsSectionTitle
      writtenTranslationsContent
      contactFormTitle
      contactSectionTitle
      email
      phoneNumber
    }
    dk: strapiMainpage {
      aboutSectionContent: aboutSectionContentDK
      heroText: heroTextDK
      spokenTranslationsContent: spokenTranslationsContentDK
      translationsSectionTitle: translationsSectionTitleDK
      writtenTranslationsContent: writtenTranslationsContentDK
      contactFormTitle: contactFormTitleDK
      contactSectionTitle: contactSectionTitleDK
      email
      phoneNumber
    }
  }  
  `);

  const pageContent = lang === 'dk' ? data.dk : data.pl;
  const [menuState, setMenuState] = useState(false);
  const { i18n } = useTranslation();

  const onToggleMenu = () => {
    setMenuState(!menuState);
  }

  useEffect(() => {
      if(lang !== i18n.language)
        i18n.changeLanguage(lang)
  });

  return (
    <>
      <Background />
      <Header onToggleMenu={onToggleMenu} />
      <Hero heroText={pageContent.heroText}/>
      <Services title={pageContent.translationsSectionTitle} service1={pageContent.writtenTranslationsContent} service2={pageContent.spokenTranslationsContent}/>
      <AboutMe title={pageContent.aboutSectionTitle} content={pageContent.aboutSectionContent}/>
      <Contact title={pageContent.contactSectionTitle} formtitle={pageContent.contactFormTitle} phone={pageContent.phoneNumber} email={pageContent.email}/>
      <Footer />
      <MobileMenu onToggleMenu={onToggleMenu} />
      <Helmet>
        <html className={menuState ? `open` : ``} />
      </Helmet>
    </>
  )
}

export default Layout;
