import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import List from "../elements/List"

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
}

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const listing = ["Bullet point #1", "Bullet point #1", "Bullet point #1"]

  return (
    <div>
      <section {...props}>
        <div className="container">
          <div className="">
            <List styling="listing" list={listing} />
          </div>
        </div>
      </section>
    </div>
  )
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps

export default Footer
