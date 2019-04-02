import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Post from '../components/post'

type MarkdownRemark = {
  frontmatter: any
  html: any
}

type PostParamsData = {
  markdownRemark: MarkdownRemark
}

type PostParams = {
  data: PostParamsData
}

export default function({
  data, // this prop will be injected by the GraphQL query below.
}: PostParams) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Fragment>
      <SEO title="Blog" keywords={['gatsby', 'application', 'react']} />
      <Post title={frontmatter.title} date={frontmatter.date} html={html} />
    </Fragment>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
