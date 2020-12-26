module.exports = {
  siteMetadata: {
    title: 'html5up - Gatsby Starter',
    author: 'Opensaas',
    description: 'html5up - Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-breakpoints',
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-styled-components`,
  ],
}