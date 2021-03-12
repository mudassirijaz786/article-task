import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const propTypes = {
  name: PropTypes.string,
}

const defaultProps = {
  children: null,
  tag: "h2",
}

const Damaging = ({ styling, name, children, tag, ...props }) => {
  return (
    <>
      {name && (
        <div {...props} className={styling}>
          <div className="container-xs">
            {name && <p className="m-0">{name}</p>}
          </div>
        </div>
      )}
    </>
  )
}

Damaging.propTypes = propTypes
Damaging.defaultProps = defaultProps

export default Damaging
