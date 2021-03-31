import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Polka Translations - Oversættelse og tolkning mellem polsk og dansk</title>
        <meta property="og:title" content="Polka Translations" />
        <meta property="og:description" content="Oversættelse og tolkning mellem polsk og dansk" />
        <meta property="og:url" content="https://polkatranslations.dk/" />
        <meta property="og:image" content="https://res.cloudinary.com/bpweb/image/upload/v1617228731/ogimagedk_tu3vdi.png" />
      </Helmet>
      <Layout lang="dk"/>
    </>
  )
}

export default IndexPage
