import React from "react"

const Damaging = ({ stylings, title, ...props }) => {
  return (
    <div {...props} className={stylings}>
      <h4>{title}</h4>
    </div>
  )
}

export default Damaging
