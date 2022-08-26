const breakpoints = [
  "350px",
  "600px",
  "768px",
  "1024px",
  "1216px",
  "1542px",
  "1680px",
]
breakpoints.xs = breakpoints[0]
breakpoints.s = breakpoints[1]
breakpoints.m = breakpoints[2]
breakpoints.l = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xxl = breakpoints[5]
breakpoints.xxxl = breakpoints[6]

const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpoints[0]})`,
  s: `@media screen and (min-width: ${breakpoints[1]})`,
  m: `@media screen and (min-width: ${breakpoints[2]})`,
  l: `@media screen and (min-width: ${breakpoints[3]})`,
  xl: `@media screen and (min-width: ${breakpoints[4]})`,
  xxl: `@media screen and (min-width: ${breakpoints[5]})`,
  xxxl: `@media screen and (min-width: ${breakpoints[6]})`,
}

const space = {
  xxxs: "2px",
  xxs: "4px",
  xs: "8px",
  s: "16px",
  m: "24px",
  l: "32px",
  xl: "48px",
  xxl: "56px",
  xxxl: "64px",
  zero: "0",
}

const fontWeights = {
  light: "300",
  regular: "400",
  medium: "500",
  bold: "700",
}

const fontSizes = [10, 11, 12, 14, 16, 20, 24, 32, 48, 64]
fontSizes.xxxs = fontSizes[0]
fontSizes.xxs = fontSizes[1]
fontSizes.xs = fontSizes[2]
fontSizes.s = fontSizes[3]
fontSizes.m = fontSizes[4]
fontSizes.l = fontSizes[5]
fontSizes.xl = fontSizes[6]
fontSizes.xxl = fontSizes[7]
fontSizes.xxxl = fontSizes[8]

const fontSizesHeading = [64, 72, 96]
fontSizesHeading.s = fontSizesHeading[0]
fontSizesHeading.m = fontSizesHeading[1]
fontSizesHeading.l = fontSizesHeading[2]

const colors = {
  ui01: "#FFFFFF",
  ui02: "#EE4444",
  ui03: "#121212",
  ui04: "#181818",
  ui05: "#2a2a2a",
}

const shadows = {
  bs01: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  bs02: "0px 0px 8px rgba(0, 0, 0, 0.25)",
  bs03: "0px 0px 16px rgba(0, 0, 0, 0.25)",
  bs04: "0px 0px 32px rgba(0, 0, 0, 0.25)",
  bs05: "0px 0px 64px rgba(0, 0, 0, 0.25)",
}

const theme = {
  breakpoints,
  mediaQueries,
  space,
  fontSizes,
  fontSizesHeading,
  colors,
  fontWeights,
  shadows,
}

export default theme
