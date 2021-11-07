require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://vinayg.me",
    title: "Vinay Gopalaiah - Full Stack React Developer",
    description: `I am a Principal Software Engineer with an experience of 7+ years in software
                  development, architecting and delivering high quality websites and mobile
                  applications(Hybrid) in various industries.I have a proven track record of
                  delivering high quality products to customers.I have extensively worked with
                  Small to Medium sized companies and enjoyed the challenges of building scalable,
    performant and cost effective solutions.`
    ,
    author: "Vinay Gopalaiah"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-R7SNSN4QLY",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
