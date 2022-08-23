const { Box, Text, Card3D, Image, Link } = require("@impulse/components")
import { useState } from "react"
import styled from "styled-components"
import CardArray from "./CardArray"
import MetaHead from "./MetaHead"
import Head from "./Head"
import Footer from "./Footer"

//392 x 532

const Card = props => {
  // console.log("Card props", props)
  const { front, back, unlocked, todayCard } = props
  const [isFront, setisFront] = useState(true)

  return (
    <Box
      position="relative"
      height="532px"
      style={{ perspective: "1000px" }}
      onClick={() => unlocked && setisFront(!isFront)}
      w="100%"
      cursor={unlocked && "pointer"}
      pointerEvents={unlocked ? "auto" : "none"}
    >
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox
          b={todayCard ? "3px solid #E55140" : "3px solid black"}
          transform={isFront ? "rotateY(0deg)" : "rotateY(180deg)"}
          style={{ filter: !unlocked && "blur(10px)" }}
        >
          {front}
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
  height: 532px;

  margin: -3px;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
`

const Home = () => {
  const unlocked = card => new Date() > new Date(card.date)
  const todayCard = card =>
    new Date().getDate() === new Date(card.date).getDate()

  return (
    <>
      <MetaHead />
      <Box maxWidth="1400px" w="100%" mx="xl" mt="10px">
        <Link href="https://secuoyas.com">
          <Box display="flex" ai="center" mt="l">
            <Image src="media/headLogo.png" />
            <Text ta="left" fs="xl" fw="bold" m="0" ml="xs" color="black">
              innovation by desing
            </Text>
          </Box>
        </Link>
      </Box>
      <Box display="flex" jc="center" my="xxxl">
        <Box maxWidth="1400px" w="100%" mx="xl" mt="10px">
          <Head />

          <Box display="flex" flexWrap="wrap" jc="center" w="100%" mt="10px">
            {CardArray.map((card, index) => (
              <Box w="392px" m="12px" key={index}>
                <Card3D
                  factorY={40}
                  factorX={20}
                  zoom={1.1}
                  active={unlocked(card) ? true : false}
                >
                  <Card
                    {...card}
                    unlocked={unlocked(card)}
                    todaycard={todayCard(card)}
                  />
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
