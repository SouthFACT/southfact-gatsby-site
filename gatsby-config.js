module.exports = {
  pathPrefix: '/southfact-gatsby-site', // only use if deploying to githib pages - currently setup to push to s3 so this will break the site
  siteMetadata: {
    author: `jbliss, dmichelson`,
    githubRepo: `https://github.com/SouthFACT/southfact-gatsby-site`,
    githubRepoName: 'southfact-gatsby-site', // only use if deploying to githib pages - currently setup to push to s3 so this will break the site
    description: `Southern Forest Area Change Tools - SouthFACT`,
    shortDescription: `Southern Forest Area Change Tools`,
    title: `SouthFACT`,
    customRequestLink: `https://code.earthengine.google.com/99d055f769538474c2e566a764f6eb6d?hideCode=true`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            resolve: `gatsby-plugin-netlify-cms-paths`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              wrapperStyle:
                'margin-left: 0!important;',
              maxWidth: 650,
              linkImagesToOriginal: true,
            },
          },

        ],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Change plugin default options here, e.g.:
        ssr: false,
        displayName: false,
        minify: false
      },
    },
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-resolve-src`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
