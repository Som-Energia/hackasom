import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import Menu from "../components/layout/Menu"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="relative pt-6 pb-16 sm:pb-20">
        <Menu />
      </div>

      <div className="text-lg max-w-7xl px-8 mx-auto mb-8">
        <h1 className="mt-2 block text-xl leading-8 uppercase font-bold tracking-wide text-som-black sm:text-2xl">
          {frontmatter.title}
        </h1>
        <div
          className="md-content mt-8 text-lg text-gray-500 leading-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!, $language: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
