import React from 'react'

import SvgHeroBackground from './svg/hero-bg'

type HeroParams = {
  screenshot: React.ReactNode
}

const HeroComponent: React.FunctionComponent<HeroParams> = ({
  children,
  screenshot,
}) => (
  <section className="hero">
    <div className="container">
      <div className="hero-inner">
        <div className="hero-copy">{children}</div>
        <div className="hero-illustration">
          <div className="hero-shapes is-revealing">
            <SvgHeroBackground />
          </div>
          <div
            className="hero-media is-revealing"
            style={{ perspective: '800px' }}
          >
            {screenshot}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroComponent
