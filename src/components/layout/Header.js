import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Title from "./partials/Title"

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
}

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  return (
    <header {...props}>
      <div className="container">
        <Title
          name="How Does Mining With Salad Affect Your PC?"
          styling="miningSalad"
        />
      </div>
    </header>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
