module.exports = {
  siteMetadata: {
    title: `Polka Translations`,
    description: `Tłumaczenia polsko-duńskie.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `polka-translations`,
        short_name: `polka`,
        start_url: `/`,
        background_color: `#c74624`,
        theme_color: `#c74624`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://polka-translations.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        //If using single types place them in this array.
        singleTypes: [`mainpage`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
