import styled, { css } from "styled-components"
import { variant } from "styled-system"
import { defaultProps, hover } from "./styled-system"

/**
 * ### [Custom Props]
 *
 *  hover={{bg:"ui01", color:"ui02"}}
 *
 *  br => borderRadius
 *
 *  b => border
 *
 *  ta => textAlign
 *
 *  fs => fontSize
 *
 *  fw => fontWeight
 *
 *  ff => fontFamily
 *
 *  w => width
 *
 *  h => height
 *
 *  mw => maxWidth
 *
 *  bs => boxShadow
 *
 *  transitionDelay => transitionDelay
 *
 *  gtc => gridTemplateColumns
 *
 *  ai => alignItems
 *
 *  jc => justifyContent
 *
 */
const Box = styled.div`
  ${defaultProps}
  ${p => p.css}
  ${p => p.hover && hover(p.hover)}
  transition: ${p => p.transition || "all 0.2s ease-in-out"};
  ${({ theme }) => theme.Box};
`

const Button = styled.button`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({ theme }) => theme.Button}
  ${defaultProps} 
  ${p => p.hover && hover(p.hover)}
`

Button.defaultProps = {
  p: "12px 24px",
  color: "white",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  bg: "ui01",
}

const HRcss = css`
  border: 0;
  height: 1px;
  background: #fff;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75)
  );
  width: 100%;
  border-radius: 0;
  box-shadow: none;
  background-clip: padding-box;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  -o-background-clip: padding-box;
  -ms-background-clip: padding-box;
`

const HR = styled.hr`
  ${HRcss}
  ${defaultProps}
  ${({ theme }) => theme.HR}
  ${p => p.hover && hover(p.hover)}
`

const Flex = styled.div`
  display: flex;
  align-items: ${p => p.alignItems || p.ai || "center"};
  justify-content: ${p => p.justifyContent || p.jc || "center"};
  flex-wrap: ${p => p.flexWrap || p.fw || "wrap"};
  ${defaultProps}
  ${p => p.hover && hover(p.hover)}
`

Flex.defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
}

// const Text = styled.p`
//   ${defaultProps}
//   ${({ theme }) => theme.Text}
//   ${p => p.hover && hover(p.hover)}
// `

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  ${defaultProps}
  transition: all 0.2s ease-in-out;
  ${({ theme }) => theme.Image}
  ${p => p.hover && hover(p.hover)}
`

const Iframe = styled.iframe`
  ${defaultProps}
  ${({ theme }) => theme.Iframe}
  ${p => p.hover && hover(p.hover)}
`

const InputCss = css`
  padding: 8px;
  width: 100%;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
  color: #fff;
  font-size: m;
  font-weight: bold;
  &:focus {
    outline: none;
    border-bottom: 1px solid #fff;
  }
  transition: all 0.3s ease-in-out;
`

const InputAreaCss = css`
  min-width: 200px;
  width: 100%;
  padding: 4px 8px;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #ffffff00;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin: 2px;
  background: transparent;
  color: white;
  border: 1px solid grey;
  font-weight: normal;
  font-size: 16px;
  padding: 16px;
  height: 150px;
`

const Input = styled.input`
  ${defaultProps}
  ${({ theme }) => theme.Input}
  ${InputCss}
`

const Form = styled.form`
  ${defaultProps}
  ${({ theme }) => theme.Input}
`

const InputArea = styled.textarea`
  ${defaultProps}
  ${({ theme }) => theme.InputArea}
  ${p => p.hover && hover(p.hover)}
  ${InputAreaCss}
`

const StyledText = styled(p => p.as || "p")`
  ${defaultProps}
  ${({ theme }) => theme.Text}
    ${p => p.hover && hover(p.hover)}
`

const Text = props => {
  return <StyledText {...props} />
}

Text.defaultProps = {
  as: "p",
  m: "0",
}

/**
 *  <Icon src={AiFillYoutube} color="red" w="30px" h="30px"...
 */

const Icon = props => {
  const StyledIcon = styled(props.src)`
    ${defaultProps}
    ${({ theme }) => theme.Icon}
    ${p => p.hover && hover(p.hover)}
  `
  const { src, ...rest } = props
  return <StyledIcon {...rest} />
}

const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${p => p.color};
  &:hover {
    text-decoration: ${p => !p.noUnderline && "underline"};
  }
`

const Link = ({ children, ...props }) => (
  <StyledA
    href={props.href}
    target={!props.noNewTab ? "_blank" : undefined}
    rel="noopener noreferrer"
    noUnderline={props.noUnderline}
  >
    {children}
  </StyledA>
)

const Module = styled.div`
  ${defaultProps}
  ${({ theme }) => theme.Input}
`

Module.defaultProps = {
  margin: "0 auto",
  textAlign: "center",
  maxWidth: "1400px",
  padding: "xl",
}

export {
  Box,
  Text,
  Image,
  Link,
  Input,
  Iframe,
  InputArea,
  Form,
  Icon,
  Flex,
  Button,
  Module,
  HR,
}
