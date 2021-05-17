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
    `gatsby-plugin-smoothscroll`,
  ],
}
