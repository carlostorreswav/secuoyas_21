import { Box, Text } from "@impulse/components"
import styled from "styled-components"

const Video = styled.video`
  object-fit: cover;
  object-position: right;
`

const Head = () => {
  return (
    <Box b="3px solid black" mw="1144px" m="0 auto">
      <Box position="relative" h="100%">
        <Box py="130px" px="xl" position="relative" zIndex="1">
          <Text
            ta={{ default: "center", m: "left" }}
            fs={{ default: "70px", s: "80px", m: "100px" }}
            ff="Gilroy"
            fw="800"
            m="0"
          >
            Cumplimos
          </Text>
          <Box display="flex" mt="-24px" jc={{ default: "center", m: "left" }}>
            <Text
              ta={{ default: "center", m: "left" }}
              fs={{ default: "70px", s: "80px", m: "100px" }}
              ff="Gilroy"
              fw="800"
              m="0"
              color="ui01"
              style={{ WebkitTextStroke: "3px #101010" }}
            >
              21&nbsp;
            </Text>
            <Text
              ta={{ default: "center", m: "left" }}
              fs={{ default: "70px", s: "80px", m: "100px" }}
              ff="Gilroy"
              fw="800"
              m="0"
            >
              años
            </Text>
          </Box>
          <Text
            ta={{ default: "center", m: "left" }}
            m={{ default: "0 auto", m: "0" }}
            mw="400px"
            ff="Gilroy"
            fs="19px"
          >
            y lo queremos celebrar contándote 21 cosas que no sabías de
            Secuoyas.
          </Text>
        </Box>
        <Box display={{ default: "none", m: "block" }}>
          <Box
            position="absolute"
            top="0"
            right="-1px"
            width="100%"
            height="100%"
          >
            <Video autoPlay muted loop width="100%" height="100%">
              <source src={`media/hero.mov`} type="video/mp4" />
            </Video>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Head
