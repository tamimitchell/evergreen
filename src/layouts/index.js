import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../sass/main.scss'

class TemplateWrapper extends React.Component {

  render() {
   const { location, children } = this.props

   return (
      <div>
        {location.pathname !== '/' &&
          <Header />
        }
        <Helmet title="Evergreen ~ Ever Growing" />
        {children()}
        <Footer />
      </div>
    )
  }
}

export default TemplateWrapper
