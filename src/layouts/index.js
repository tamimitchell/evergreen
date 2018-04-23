import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../sass/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    {location.pathname !== '/' &&
      <Header />
    }
    <Helmet title="Evergreen ~ Ever Growing" />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
