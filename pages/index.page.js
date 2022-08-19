const { Box, Text, Card3D, Image, Link } = require("@impulse/components")
import { useState } from "react"
import styled from "styled-components"
import CardArray from "./CardArray"

const Card = props => {
  console.log("Card props", props)
  const { front, back } = props
  const [isFront, setisFront] = useState(true)

  return (
    <Box
      position="relative"
      height="450px"
      style={{ perspective: "1000px" }}
      onClick={() => setisFront(!isFront)}
      w="100%"
      cursor="pointer"
    >
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox transform={isFront ? "rotateY(0deg)" : "rotateY(180deg)"}>
          {front}
        </CustomBox>
      </Box>
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox transform={!isFront ? "rotateY(-0deg)" : "rotateY(-180deg)"}>
          {back}
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
  border: 3px solid black;
  margin: -3px;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
`

const Home = () => {
  CardArray.map(card => console.log("card", card))
  return (
    <Box>
      <Link href="https://secuoyas.com">
        <Box display="flex" ai="center" m="m">
          <Image src="media/headLogo.png" />
          <Text ta="left" fs="xl" fw="bold" m="0" ml="xs" color="black">
            innovation by desing
          </Text>
        </Box>
      </Link>
      <Box display="flex" jc="center" my="xxxl">
        <Box maxWidth="1200px" w="100%" mx="xl">
          <Head />

          <Box display="flex" flexWrap="wrap" jc="center" w="100%">
            {CardArray.map((card, index) => (
              <Box w={{ default: "100%", s: "50%", l: "33.33%" }} key={index}>
                <Card3D factorY={40} factorX={20} zoom={1.1}>
                  <Card {...card} />
                </Card3D>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Head = () => {
  return (
    <Box b="3px solid black" m="-3px">
      <Box position="relative" h="100%">
        <Box p="xl" position="relative" zIndex="1">
          <Text
            ta={{ default: "center", m: "left" }}
            fs={{ default: "50px", s: "55px", m: "80px" }}
            fw="bold"
            m="0"
          >
            Cumplimos
          </Text>
          <Box display="flex" mt="-10px" jc={{ default: "center", m: "left" }}>
            <Text
              ta={{ default: "center", m: "left" }}
              fs={{ default: "50px", s: "55px", m: "80px" }}
              fw="bold"
              m="0"
              color="ui02"
            >
              21&nbsp;
            </Text>
            <Text
              ta={{ default: "center", m: "left" }}
              fs={{ default: "50px", s: "55px", m: "80px" }}
              fw="bold"
              m="0"
            >
              años
            </Text>
          </Box>
          <Text
            ta={{ default: "center", m: "left" }}
            m={{ default: "0 auto", m: "0" }}
            mw="400px"
          >
            y lo queremos celebrar contándote 21 cosas que no sabías de
            Secuoyas.
          </Text>
        </Box>
        <Box display={{ default: "none", m: "block" }}>
          <Box position="absolute" bottom="-4px" right="1px">
            <Image src="media/head1.png" />
          </Box>
          <Box position="absolute" bottom="-4px" right="1px">
            <Image src="media/head2.png" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
