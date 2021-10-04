// gatsby-config.js
const path = require("path")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        libs: path.join(__dirname, "src/libs"),
        components: path.join(__dirname, "src/components"),
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/mds`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/i18n`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`es`, `ca`, `eu`, `gl`],
        defaultLanguage: `es`,
        redirect: false,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://hackasom.somenergia.coop/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
          fallbackLng: "es",
        },
        pages: [
          {
            matchPath: "/aviso-legal",
            getLanguageFromPath: true,
            languages: ["es"],
          },
          {
            matchPath: "/ca/avis-legal",
            getLanguageFromPath: true,
            languages: ["ca"],
          },
        ],
      },
    },
  ],
}
