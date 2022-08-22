const {
  Box,
  Text,
  Card3D,
  Image,
  Link,
  Icon,
  HR,
} = require("@impulse/components")
import { useState } from "react"
import styled from "styled-components"
import CardArray from "./CardArray2"
import MetaHead from "./MetaHead"
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { TiSocialInstagram } from "react-icons/ti"
import { SiMedium } from "react-icons/si"

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
    >
      <Box style={{ transformStyle: "preserve-3d" }}>
        <CustomBox
          b={todayCard ? "3px solid #E55140" : "3px solid black"}
          transform={isFront ? "rotateY(0deg)" : "rotateY(180deg)"}
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

const Footer = () => {
  return (
    <Box b="3px solid black" p="xxl" m="m">
      <Box mw="700px">
        <Text fs="xxl" fw="normal" ff="Gilroy-Bold">
          Somos 100% remotos
        </Text>
        <Text m="0" mt="m">
          Madrid, Valencia, Murcia, Cuenca, Toledo, Ciudad Real, Valladolid,
          Segovia, Castellón, Tarragona, Munich... ¡No hace falta estar al lado
          para ser un equipo!
        </Text>
      </Box>
      <Box display="flex" ai="end" jc="space-between" mt="l">
        <Box mr="l" mt="m">
          <Text fw="bold" fs="l">
            Madrid
          </Text>
          <Text fw="normal" m="0" mt="s">
            + 34 660 564 092
          </Text>
          <Text fw="normal" m="0">
            hola@secuoyas.com
          </Text>
          <Text fw="normal" m="0">
            Calle Torregalindo, 1. 28016 - Madrid
          </Text>
        </Box>
        <Box mr="l" mt="m">
          <Text fw="bold" fs="l">
            Munich
          </Text>
          <Text fw="normal" m="0" mt="s">
            + 49 176 5288 0580
          </Text>
          <Text fw="normal" m="0">
            hallo@secuoyas.com
          </Text>
          <Text fw="normal" m="0">
            Franzstrasse, 15. 82140 Olching - Munich
          </Text>
        </Box>
        <Box>
          <MediaIcon
            icon={AiOutlineTwitter}
            href="https://twitter.com/secuoyas"
          />
          <MediaIcon
            icon={FaLinkedinIn}
            href="https://www.linkedin.com/company/secuoyas/mycompany/"
          />
          <MediaIcon
            icon={TiSocialInstagram}
            href="https://www.instagram.com/secuoyas/?hl=en"
          />
          <MediaIcon icon={SiMedium} href="https://medium.com/@Secuoyas" />
          <MediaIcon icon={AiFillGithub} href="https://github.com/Secuoyas" />
        </Box>
      </Box>
    </Box>
  )
}

const MediaIcon = ({ href, icon }) => {
  return (
    <Link href={href}>
      <Icon src={icon} h={40} w={40} p="xxs" px="s" color="black" />
    </Link>
  )
}

const Home = () => {
  // CardArray.map(card => console.log("card", card))
  return (
    <>
      <MetaHead />
      <Box>
        <Box maxWidth="1224px" w="100%" m="0 auto" mt="10px">
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
                <Box
                  // w={{ default: "100%", s: "50%", l: "33.33%" }}
                  w="392px"
                  m="12px"
                  key={index}
                >
                  <Card3D
                    factorY={40}
                    factorX={20}
                    zoom={1.1}
                    active={card.unlocked ? true : false}
                  >
                    <Card {...card} />
                  </Card3D>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

const Head = () => {
  return (
    <Box b="3px solid black" mw="1224px" m="0 auto">
      <Box position="relative" h="100%">
        <Box py="100px" px="xl" position="relative" zIndex="1">
          <Text
            ta={{ default: "center", m: "left" }}
            fs={{ default: "70px", s: "80px", m: "100px" }}
            fw="bold"
            m="0"
          >
            Cumplimos
          </Text>
          <Box display="flex" mt="-18px" jc={{ default: "center", m: "left" }}>
            <Text
              ta={{ default: "center", m: "left" }}
              fs={{ default: "70px", s: "80px", m: "100px" }}
              fw="bold"
              m="0"
              color="ui02"
            >
              21&nbsp;
            </Text>
            <Text
              ta={{ default: "center", m: "left" }}
              fs={{ default: "70px", s: "80px", m: "100px" }}
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
            fontFamily="Work Sans"
            fs="18px"
          >
            y lo queremos celebrar contándote 21 cosas que no sabías de
            Secuoyas.
          </Text>
        </Box>
        <Box display={{ default: "none", m: "block" }}>
          <Box position="absolute" bottom="-6px" right="1px">
            <Image src="media/head1.png" />
          </Box>
          <Box position="absolute" bottom="-6px" right="1px">
            <Image src="media/head2.png" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
