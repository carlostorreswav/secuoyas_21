const { Box, Text, Card3D } = require("@impulse/components")
import { useState } from "react"
import styled from "styled-components"
import Things_21 from "./Things_21.json"

const Card = props => {
  const { content, title } = props
  const [show, setShow] = useState(true)

  return (
    <Box
      position="relative"
      height="450px"
      style={{ perspective: "1000px" }}
      onClick={() => setShow(!show)}
      w="100%"
      cursor="pointer"
    >
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox transform={show ? "rotateY(0deg)" : "rotateY(180deg)"}>
          {title}
        </CustomBox>
      </Box>
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox transform={!show ? "rotateY(-0deg)" : "rotateY(-180deg)"}>
          {content}
        </CustomBox>
      </Box>
    </Box>
  )
}

const CustomBox = styled(Box)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  height: 450px;
  border: 2px solid black;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
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
        maxWidth="1200px"
        m="0 auto"
        mt="xxxl"
      >
        {Things_21.map((thing, index) => (
          <Box w="30%" mw="400px">
            <Card3D factorY={40} factorX={20} zoom={1.2}>
              <Card key={index} {...thing} />
            </Card3D>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Home
