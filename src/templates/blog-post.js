import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import StyledImage from '../components/Images/StyledImage'
import Content, { PostContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  subtitle,
  helmet,
}) => {
  return (
    <section id="main" className="section wrapper style1">
      {helmet || ''}
      <div className="inner">
        <header className="major blog special">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <p>
            {subtitle}
          </p>
        </header>

        <div className="content">
          <PostContent content={content} />
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <p className="taglist">
                {tags.map(tag => (
                  <span key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    &nbsp;
                    &nbsp;
                  </span>
                ))}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post)

  return (
    <BlogPostTemplate
      content={post.htmlAst}
      contentComponent={PostContent}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      id
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        tags
      }
    }
  }
`
