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
        path: `${__dirname}/static/img`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              wrapperStyle:
                'margin-left: 0!important;',
              maxWidth: 650,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
