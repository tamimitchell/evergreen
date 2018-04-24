import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import BlogPostCard from '../Components/Blog/BlogPostCard'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <section id="main" className="section wrapper style1">
        <Helmet title={`${tag} | ${title}`} />
        <div className="inner">
          <header className="major special">
            <h2>Posts</h2>
            <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
          </header>
          <div className="content">
            <section className="spotlights">
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

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
