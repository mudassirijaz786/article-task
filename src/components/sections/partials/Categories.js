import React from "react"
import Button from "../../elements/Button"

export default function Categories() {
  return (
    <div>
      <div>
        <Button tag="a" wideMobile href="">
          Category 1
        </Button>

        <Button
          tag="a"
          wideMobile
          href=""
          style={{ marginLeft: 5, marginRight: 5 }}
        >
          Keyword 2
        </Button>
      </div>
    </div>
  )
}
