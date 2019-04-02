import React from 'react'
import { Link } from 'gatsby'

type IconLinkParams = {
  className: string
  to?: string
  href?: string
  type: string
  icon: string
}

const IconLink = ({ className, to, href, type, icon }: IconLinkParams) =>
  href ? (
    <a className={className} href={href}>
      <i className={[type, `${type}-${icon}`].join(' ')} />
    </a>
  ) : to ? (
    <Link className={className} to={to}>
      <i className={[type, `${type}-${icon}`].join(' ')} />
    </Link>
  ) : null

export default IconLink
