import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import './scss/style.scss'
import './overrides.scss'
import './js/cruip-sienna'

const TemplateWrapperComponent: React.FunctionComponent = ({ children }) => (
  <Fragment>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Hind+Vadodara:400,600,700|Frank+Ruhl+Libre:700"
        rel="stylesheet"
      />
      <body className="is-boxed has-animations" />
    </Helmet>
    {children}
  </Fragment>
)

type TemplateParams = {
  headerLogo: React.ReactNode
  footerLogo: React.ReactNode
  copyright: React.ReactNode
  footerLinks: React.ReactNode[]
  socialLinks: React.ReactNode[]
}

const TemplateComponent: React.FunctionComponent<TemplateParams> = ({
  children,
  headerLogo,
  footerLogo,
  copyright,
  footerLinks,
  socialLinks,
}) => (
  <TemplateWrapperComponent>
    <div className="body-wrap boxed-container">
      <Header logo={headerLogo} />
      <main>{children}</main>
      <Footer
        logo={footerLogo}
        copyright={copyright}
        links={footerLinks}
        social={socialLinks}
      />
    </div>
  </TemplateWrapperComponent>
)

export default TemplateComponent
