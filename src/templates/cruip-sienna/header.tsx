import React from 'react'

import SvgYellowCircle from './svg/yellow-circle'

type HeaderParams = {
  logo: React.ReactNode
}

const HeaderComponent: React.FunctionComponent<HeaderParams> = ({ logo }) => (
  <header className="site-header">
    <div className="header-sun is-revealing">
      <SvgYellowCircle />
    </div>
    <div className="container">
      <div className="site-header-inner">
        <div className="brand header-brand">
          <div className="m-0">{logo}</div>
        </div>
      </div>
    </div>
  </header>
)

export default HeaderComponent
