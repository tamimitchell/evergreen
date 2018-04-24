import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import BlogPostCard from '../Components/Blog/BlogPostCard'

class BlogIndexPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount

    return (
      <section id="main" className="section wrapper style1 special">
        <Helmet title={title} />
        <div className="inner">
          <header className="major special">
            <h2>All Posts</h2>
          </header>
          <div className="content">
            <section className="features">
              {posts.map(edge =>
                <BlogPostCard post={edge.node} key={edge.node.id} />
               )}
            </section>
          </div>
        </div>
      </section>
    )
  }
}

export default BlogIndexPage

export const blogIndexPageQuery = graphql`
  query BlogIndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            templateKey
            previewImage
            tags
          }
        }
      }
    }
  }
`
