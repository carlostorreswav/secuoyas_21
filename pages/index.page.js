const { Box, Text, Card3D, Image, Link } = require("@impulse/components")
import { useState } from "react"
import styled from "styled-components"
import CardArray from "./CardArray"
import MetaHead from "./MetaHead"
import Head from "./Head"
import Footer from "./Footer"

//392 x 532

const h1 = "532px"
const h2 = "476px"
const w1 = "392px"
const w2 = "360px"

const cardHeight = h2
const cardWidth = w2

const Card = props => {
  // console.log("Card props", props)
  const { front, back, unlocked } = props
  const [isFront, setisFront] = useState(true)

  return (
    <Box
      position="relative"
      // height="532px"
      height={cardHeight}
      onClick={() => unlocked && setisFront(!isFront)}
      w="100%"
      cursor={(unlocked && "pointer") || "auto"}
      pointerEvents={unlocked ? "auto" : "none"}
    >
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox
          b="3px solid #101010"
          transform={isFront ? "rotateY(0deg)" : "rotateY(180deg)"}
        >
          <Box
            width={unlocked ? "100%" : "98%"}
            height={unlocked ? "100%" : "98%"}
            ml={unlocked ? "0" : "1%"}
            mt={unlocked ? "0" : "1%"}
            style={{
              perspective: "1000px",
              filter: (!unlocked && "blur(4px)") || "none",
            }}
          >
            {front}
          </Box>
        </CustomBox>
      </Box>
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox
          b={"3px solid white"}
          transform={!isFront ? "rotateY(-0deg)" : "rotateY(-180deg)"}
        >
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
  height: ${cardHeight};

  margin: -3px;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
`

const Home = () => {
  const now = new Date()
  const unlocked = card =>
    now > new Date(card.date) || now < new Date("8/30/22")

  return (
    <>
      <MetaHead />
      <Box maxWidth="1400px" w="100%" m="0 auto" mt="10px">
        <Box mw="1200px" m="0 auto">
          <Link href="https://secuoyas.com">
            <Box display="flex" ai="center" m="m">
              <Image src="media/headLogo.png" h={35} w={35} />
              <Text
                ta="left"
                fw="600"
                ff="Gilroy"
                fs="24px"
                m="0"
                ml="12px"
                color="black"
              >
                innovation by design
              </Text>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box display="flex" jc="center" mb="xxxl">
        <Box maxWidth="1400px" m="0 auto" w="100%" mx="xl" mt="0px">
          <Head />

          <Box display="flex" flexWrap="wrap" jc="center" w="100%" mt="10px">
            {CardArray.map((card, index) => (
              <Box
                // w="392px"
                w={cardWidth}
                m="16px"
                key={index}
              >
                <Card3D
                  factorY={40}
                  factorX={20}
                  zoom={1.1}
                  active={unlocked(card) ? true : false}
                >
                  <Card {...card} unlocked={unlocked(card)} />
                </Card3D>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Home
