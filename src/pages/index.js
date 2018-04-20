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
        <Banner content={data.homeContent.frontmatter.banner} />
        <FeaturesSection content={data.homeContent.frontmatter.featuresSection} />
        <ContactSection content={data.homeContent.frontmatter.contactSection} />
        <AboutSection content={data.homeContent.frontmatter.aboutSection} />
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
    homeContent: markdownRemark(id: { regex: "/home/index.md/" }) {
      frontmatter {
        banner {
          title
          subtitle
          blurb
        }
        featuresSection {
          title
          subtitle
          blurb
          callToAction
          features {
            title
            blurb
            iconClass
          }
        }
        contactSection {
          title
          blurb
          callToAction
          thankYouMessage
        }
        aboutSection {
          title
          subtitle
          blurb
          image1 { image }
          image2 { image }
          image3 { image }
          image4 { image }
        }
      }
    }
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
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
