import Script from "next/script"
const { Box, Text, Card3D, Image, Link } = require("@impulse/components")
import { useState, useEffect } from "react"
import styled from "styled-components"
import CardArray from "./CardArray"
import MetaHead from "./MetaHead"
import Head from "./Head"
import Footer from "./Footer"

const cardHeight = "476px"
const cardWidth = "360px"

const Card = props => {
  const { front, back, unlocked } = props
  const [isFront, setisFront] = useState(true)
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    setIsUnlocked(unlocked)
  }, [unlocked])

  return (
    <Box
      position="relative"
      height={cardHeight}
      onClick={() => isUnlocked && setisFront(!isFront)}
      w="100%"
      cursor={(isUnlocked && "pointer") || "auto"}
      pointerEvents={isUnlocked ? "auto" : "none"}
    >
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox
          b="3px solid #101010"
          transform={isFront ? "rotateY(0deg)" : "rotateY(180deg)"}
          style={{
            boxSizing: "border-box",
          }}
        >
          <Box
            width={isUnlocked ? "100%" : "98%"}
            height={isUnlocked ? "100%" : "98%"}
            ml={isUnlocked ? "0" : "1%"}
            mt={isUnlocked ? "0" : "1%"}
            style={{
              perspective: "1000px",
              filter: (!isUnlocked && "blur(4px)") || "none",
            }}
          >
            {front}
          </Box>
        </CustomBox>
      </Box>
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox
          b="none"
          transform={!isFront ? "rotateY(-0deg)" : "rotateY(-180deg)"}
          style={{
            boxSizing: "border-box",
          }}
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

  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
`

const Home = () => {
  const unlocked = card => {
    const now = new Date()
    return now > new Date(card.date) || now < new Date("8/30/22")
  }

  return (
    <>
      <MetaHead />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-TFN4TZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-TFN4TZ');
        `}
      </Script>

      <Box display="flex" jc="center">
        <Box
          maxWidth="1400px"
          m="0 auto"
          w="100%"
          px={{ default: "s", s: "xl" }}
          mt="10px"
        >
          <Box mw="1144px" m="0 auto">
            <Link href="https://secuoyas.com" noUnderline>
              <Box display="flex" ai="center" my="m">
                <Image src="media/headLogo.png" h={40} w={40} />
                <Text
                  ta="left"
                  fw="600"
                  ff="Gilroy"
                  fs="20px"
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
      </Box>

      <Box maxWidth="1400px" m="0 auto" w="100%" mt="0px" overflow="hidden">
        <Box px={{ default: "s", s: "xl" }}>
          <Head />
        </Box>

        <Box display="flex" flexWrap="wrap" jc="center" w="100%" mt="10px">
          {CardArray.map((card, index) => (
            <Box w={{ default: "100%", s: cardWidth }} m="16px" key={index}>
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

      <Box px={{ default: "s", s: "xl" }}>
        <Footer />
      </Box>
    </>
  )
}

export default Home
