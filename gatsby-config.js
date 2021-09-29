module.exports = {
 
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "y",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
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
    
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3ijjvrm4b5lg`,
        accessToken: `b8KKLwOJ2U4DBmL2tLw4eafgd9p6sWTiRRlKmbCZXSc`,
        
      },
    },
  ],
};
