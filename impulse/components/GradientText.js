import styled from "styled-components"

const { Box, Text } = require("./components")

const CustomText = styled(Text)`
  background: linear-gradient(to right, ${props => props.colors.join(", ")});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const GradientText = props => {
  const { children, colors, ...rest } = props
  return (
    <CustomText {...rest} colors={colors || ["grey", "white"]}>
      {children}
    </CustomText>
  )
}

export default GradientText
