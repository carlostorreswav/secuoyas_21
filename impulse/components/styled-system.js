import { css } from "styled-components"
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  system,
} from "styled-system"

const cursor = system({
  cursor: true,
})

//create alias for borderRadius as br
const CustomProps = system({
  br: {
    property: "borderRadius",
  },
  b: {
    property: "border",
  },
  ta: {
    property: "textAlign",
  },
  fs: {
    property: "fontSize",
    scale: "fontSizes",
  },
  fw: {
    property: "fontWeight",
  },
  ff: {
    property: "fontFamily",
  },
  w: {
    property: "width",
  },
  h: {
    property: "height",
  },
  mw: {
    property: "maxWidth",
  },
  bs: {
    property: "boxShadow",
    scale: "shadows",
  },
  transition: {
    property: "transition",
  },
  transitionDelay: {
    property: "transitionDelay",
  },
  gtc: {
    property: "gridTemplateColumns",
  },
  ai: {
    property: "alignItems",
  },
  jc: {
    property: "justifyContent",
  },
  wb: {
    property: "wordBreak",
  },
  wordBreak: {
    property: "wordBreak",
  },
  maxH: {
    property: "maxHeight",
  },
  minH: {
    property: "minHeight",
  },
  fsh: {
    property: "fontSize",
    scale: "fontSizesHeading",
  },
  td: {
    property: "textDecoration",
  },
  ls: {
    property: "letterSpacing",
    scale: "letterSpacings",
  },
  transform: {
    property: "transform",
  },
  pointerEvents: {
    property: "pointerEvents",
  },
  transformOrigin: {
    property: "transformOrigin",
  },
  minW: {
    property: "minWidth",
  },
  maxW: {
    property: "maxWidth",
  },
  zoom: {
    property: "zoom",
  },
})

export const defaultProps = compose(
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  cursor,
  CustomProps
)

export const composeProps = props => defaultProps(props)

/**
 * ### Function to get the hover styles
 * first you need to compose the props to get the good keys
 *
 * i.e. hover({bg:"ui01", color:"ui02"})
 *
 * then we have to pass it trough the theme to get the color or space values
 * and then return it as css on hover
 **/
export const hover = props => {
  const composedProps = composeProps(props)
  const result = css`
    &:hover {
      ${Object.entries(composedProps).map(([key, value]) => ({
        [key]: ({ theme }) =>
          theme.colors[value] ||
          theme.space[value] ||
          theme.shadows[value] ||
          value,
      }))}
    }
  `
  return result
}
