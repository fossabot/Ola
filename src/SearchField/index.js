import React from 'react'
import {default as PT} from 'prop-types'

import { Button } from '../Button'
import { Input } from '../Input'
import { Spinner } from '../Spinner'

const SearchField = ({ id, textButton, busy, placeholder, ...props }) => {
  return (
    <div className="ola_searchField">
      <div className="ola_searchField-field">
        <label htmlFor={id} className="ola_searchField-label">{ placeholder }</label>
        <Input type="search" id={id} extraClass="ola_searchField-input" placeholder={placeholder} {...props} />
        {busy && <Spinner />}
      </div>
      { textButton && <Button variant="primary" busy={busy && textButton} extraClass="ola_searchField-button" tabIndex="-1">{ textButton }</Button> }
    </div>
  )
}

SearchField.defaultProps = {
  textButton: null,
  busy: false
}

SearchField.propTypes = {
  /** Id for SearchField */
  id: PT.string.isRequired,
  /** Text Button for search */
  textButton: PT.string,
  /** Placeholder ( required because works like label )*/
  placeholder: PT.string.isRequired,
  /** Busy */
  busy: PT.bool
}

export { SearchField }
