import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Banner from '../components/Home/Banner'
import FeaturesSection from '../components/Home/FeaturesSection'
import TravelSection from '../components/Home/TravelSection'
import BlogSection from '../components/Home/BlogSection'
import ContactSection from '../components/Home/ContactSection'
import AboutSection from '../components/Home/AboutSection'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    console.log(data);
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <Helmet
          bodyAttributes={{
            class: 'landing'
          }}
        />
        <Banner />
        <FeaturesSection />
        <ContactSection />
        <AboutSection />
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
