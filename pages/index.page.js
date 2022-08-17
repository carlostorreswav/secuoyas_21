const { Box, Text } = require("@impulse/components")
import { useState } from "react"
import styled from "styled-components"
import Things_21 from "./Things_21.json"

const Card = props => {
  const { content, title } = props
  const [show, setShow] = useState(true)
  return (
    // <Box
    //   width="25%"
    //   p="m"
    //   m="m"
    //   b="1px solid grey"
    //   br="4px"
    //   onClick={() => setOpen(!open)}
    //   cursor="pointer"
    //   bg={open ? "ui01" : "ui03"}
    // >
    //   {content}
    // </Box>
    <Box
      position="relative"
      height="450px"
      // w={{ default: "300px", xs: "350px", s: "500px", m: "550px" }}
      // m="0 auto"
      style={{ perspective: "1000px" }}
      onClick={() => setShow(!show)}
      w="30%"
      mw="400px"
      m="m"
      cursor="pointer"
    >
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox
          w="100%"
          position="absolute"
          top={0}
          left={0}
          // opacity={show ? 1 : 0}
          zIndex={show ? 1 : 0}
          transform={show ? "rotateY(0deg)" : "rotateY(180deg)"}
          transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
          height="450px"
        >
          {title}
        </CustomBox>
      </Box>
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox
          w="100%"
          position="absolute"
          top={0}
          left={0}
          // opacity={!show ? 1 : 0}
          transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
          transform={!show ? "rotateY(-0deg)" : "rotateY(-180deg)"}
          zIndex={show ? 1 : 0}
          height="450px"
        >
          {content}
        </CustomBox>
      </Box>
    </Box>
  )
}

const CustomBox = styled(Box)`
  border: 1px solid blue;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #242424;
`

const Home = () => {
  return (
    <Box>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Hello World
      </Text>
      <Box
        display="flex"
        flexWrap="wrap"
        jc="center"
        maxWidth="1500px"
        m="0 auto"
        mt="xxxl"
      >
        {Things_21.map((thing, index) => (
          <Card key={index} {...thing} />
        ))}
      </Box>
    </Box>
  )
}

export default Home
