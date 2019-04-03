import React from 'react'

type FooterParams = {
  logo: React.ReactNode
  copyright: React.ReactNode
  links: React.ReactNode[]
  social: React.ReactNode[]
}

const FooterComponent: React.FunctionComponent<FooterParams> = ({
  logo,
  copyright,
  links,
  social,
}) => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer-inner">
        <div className="brand footer-brand">{logo}</div>

        {links && links.length ? (
          <ul className="footer-links list-reset">
            {links.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        ) : null}

        {social && social.length ? (
          <ul className="footer-social-links list-reset">
            {social.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        ) : null}

        <div className="footer-copyright">{copyright}</div>
      </div>
    </div>
  </footer>
)

export default FooterComponent
