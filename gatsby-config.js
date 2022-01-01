module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:8000/",
    title: "Mühle Altrogge",
    author: {
      name: 'Max Atslega',
      url: 'https://max.atslega.de',
      email: 'contact@atslega.de'
    },
    siteLanguage: "de",
    image: "/favicon-96x96.png"

  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mui-emotion',
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    `gatsby-transformer-remark`,
    "gatsby-transformer-sharp",
  ],
};
