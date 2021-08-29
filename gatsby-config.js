module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: "rpf-products",
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "rpf-products",
        schemas: {
          case_study: require("./custom_types/case_study.json"),
          category: require("./custom_types/category.json"),
          product: require("./custom_types/product.json"),
        },
      },
    },
  ],
};
