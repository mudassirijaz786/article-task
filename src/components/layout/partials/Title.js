import React from "react"

const Title = ({ stylings, name, ...props }) => {
  return (
    <div {...props} className={stylings} style={{ width: 500, height: 68 }}>
      <h4>{name}</h4>
    </div>
  )
}

export default Title
