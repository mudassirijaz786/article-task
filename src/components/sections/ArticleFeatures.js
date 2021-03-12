import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import Damaging from "../layout/Damaging"
import Svg from "../elements/Svg"
import List from "../elements/List"
import Button from "../elements/Button"
import Categories from "./partials/Categories"
import { useMediaPredicate } from "react-media-hook"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
const ArticleFeatures = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const biggerThan360 = useMediaPredicate("(min-width: 360px)")

  const biggerThan768 = useMediaPredicate("(min-width: 1080px)")

  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className,
  )

  const innerClasses = classNames(
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
  )

  console.log("bigger", biggerThan360)
  const sectionHeader1 =
    "The world of cryptomining can daunt newcomers, after all — those of us with hardware capable of mining have invested a lot of time, money, and love into our rigs, and wouldn’t dare risk our PC’s health for anything, even extra income. Our mission at Salad is to demystify and simplify mining for would-be adopters. We see crypto as critical to web 3.0, and we think we can help jump start the generation of users who make a decentralized internet possible."

  const sectionHeader2 =
    "With all the rumors swirling about scams, hardware degradation, and profitability (or the lack thereof), we wanted to clear the waters and make a definitive guide to the impact mining has on your PC, from electricity costs to wear and tear. That way on-the-fence miners can make an informed decision about whether to jump in the blockchain headfirst or stick to the sidelines."

  const sectionHeading3 =
    "This is where most potential adopters get stuck. A lot of ink has been spilled on the subject, and misunderstandings abound. Luckily, there’s tons of great resources from level-headed figures in the tech space, plus this handy-dandy article I wrote a couple of months ago."

  const title = "Will Mining Damage, Degrade, Or Otherwise Harm My PC?"

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="imageBackground" />
          <div style={{ display: "flex" }}>
            <Categories />
            <SectionHeader className="firstParagraph" name={sectionHeader1} />
          </div>
          <div style={{ marginLeft: "13%" }}>
            <SectionHeader name={sectionHeader2} />
            <Damaging
              stylings={
                biggerThan768
                  ? "secondHeading"
                  : biggerThan360
                  ? "secondHeadingSmall"
                  : ""
              }
              title={title}
            />
            <SectionHeader className="secondParagraph" name={sectionHeading3} />
            <SectionHeader name="This is where most potential adopters get stuck. A lot of ink has been spilled on the subject, and misunderstandings abound. Luckily, there’s tons of great resources from level-headed figures in the tech space, plus this handy-dandy article I wrote a couple of months ago." />
            <Svg
              styling={biggerThan768 ? "svg" : biggerThan360 ? "svgSmall" : ""}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

ArticleFeatures.propTypes = propTypes
ArticleFeatures.defaultProps = defaultProps

export default ArticleFeatures
