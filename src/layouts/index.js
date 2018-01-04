import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="makotot"
      meta={[
        { charset: 'utf-8' },
        { name: 'author', content: 'makotot' },
        { name: 'keywords', content: 'developer' },
      ]}
      htmlAttributes={ { lang: 'ja' } }
    >
    </Helmet>
    <div>
      { children() }
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
