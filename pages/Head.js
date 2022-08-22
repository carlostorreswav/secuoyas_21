import { Box, Image, Text } from "@impulse/components"

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

export default Head
