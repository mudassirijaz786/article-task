import React from "react"

export default function Svg({ styling, list }) {
  return (
    <div className={styling}>
      <ul>
        {list?.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}
