require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://vinaygpersonalsite.gatsbyjs.io",
    title: "vinayg-personal-site",
    description: "A personal site for Vinay Gopalaiah. A full stack nodeJS developer, currently working in React, Gatsby & Python",
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
