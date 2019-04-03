import React from 'react'

import ImgMobileDesignerScreenshot from '../images/screenshot-mobile-designer.png'
import ImgLogoBlack from '../images/logo-black.png'
import ImgLogoWhite from '../images/logo-white.png'
import SvgFacebook from '../templates/cruip-sienna/svg/logos/facebook'
import SvgTwitter from '../templates/cruip-sienna/svg/logos/twitter'

type Content = {
  headerLogoLink: React.ReactNode
  footerLogoLink: React.ReactNode
  homepageTitle: string

  heroTitle: React.ReactNode
  heroDescription: React.ReactNode
  heroCTA: React.ReactNode
  heroScreenshot: React.ReactNode

  featuresTitle: React.ReactNode
  featuresDescription?: React.ReactNode

  footerLinks: React.ReactNode[]
  socialLinks: React.ReactNode[]
  copyright: React.ReactNode
}

const isomorphicProjection = (
  style: React.CSSProperties = {}
): React.CSSProperties => {
  return {
    transform: 'rotateX(10deg) rotateZ(5deg)',
    transformStyle: 'preserve-3d',
    transition: '.3s',
    ...style,
  }
}

const content: Content = {
  headerLogoLink: (
    <a href="/">
      <img src={ImgLogoBlack} style={{ height: 48 }} />
    </a>
  ),
  footerLogoLink: (
    <a href="/">
      <img src={ImgLogoWhite} style={{ height: 48 }} />
    </a>
  ),
  homepageTitle: 'Courier',

  heroTitle: 'Super Powered Notifications',
  heroDescription: (
    <span>
      The easiest way to add notifications to a new project or to add additional
      channels &mdash; like SMS, Facebook Messenger, or Slack &mdash; to your
      existing notification strategy.
    </span>
  ),
  heroCTA: (
    <a className="button button-primary button-shadow" href="/#pricing">
      Get started for free!
    </a>
  ),
  heroScreenshot: (
    <img
      src={ImgMobileDesignerScreenshot}
      style={isomorphicProjection({ width: 700 })}
    />
  ),

  featuresTitle: (
    <span style={{ fontSize: '40px' }}>
      Meet{' '}
      <img
        src={ImgLogoBlack}
        style={{ height: 60, display: 'inline', position: 'relative', top: -8 }}
      />
    </span>
  ),

  footerLinks: [
    // <a href="/">Contact</a>,
    // <a href="/">About us</a>,
    // <a href="/">FAQ's</a>,
    // <a href="/">Support</a>
  ],
  socialLinks: [
    <a href="https://www.facebook.com/trycourier">
      <span className="screen-reader-text">Facebook</span>
      <SvgFacebook />
    </a>,
    <a href="https://www.twitter.com/trycourier">
      <span className="screen-reader-text">Twitter</span>
      <SvgTwitter />
    </a>,
  ],
  copyright: (
    <span>
      &copy; {new Date().getFullYear()} trycourier.com, Inc. All rights
      reserved.
    </span>
  ),
}

export default content
