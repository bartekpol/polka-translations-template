import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const plIndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Polka Translations - Tłumaczenia pisemne i ustne w języku polskim i duńskim</title>
        <meta property="og:title" content="Polka Translations" />
        <meta property="og:description" content="Tłumaczenia pisemne i ustne w języku polskim i duńskim" />
        <meta property="og:url" content="https://polkatranslations.dk/pl" />
        <meta property="og:image" content="https://res.cloudinary.com/bpweb/image/upload/v1617270371/ogimagepl_azvx90.png" />
      </Helmet>
      <Layout lang="pl"/>
    </>
  )
}

export default plIndexPage
