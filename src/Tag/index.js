import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Tag = ({ variant, className, children }) =>
  <span className={cx('ola_tag', variant && `is-${variant}`, className)}>
    {children}
  </span>

Tag.defaultProps = {
  variant: null
}

Tag.propTypes = {
  /** Tag variants */
  variant: PT.oneOf(['invert', 'error', 'pro', 'success', 'warning']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default Tag
