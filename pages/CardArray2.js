import { Box, Text } from "@impulse/components"
import { useRef } from "react"
import styled from "styled-components"

const MainBox = styled(Box)`
  height: 100%;
`

const Video = styled.video`
  /* width: 100%;
  height: 100%; */
  object-fit: cover;
  object-position: center;
`

const Card = ({ number, back }) => {
  const Front = (
    <MainBox
      onMouseEnter={() => document.getElementById(`card${number}`).play()}
      onMouseLeave={() => document.getElementById(`card${number}`).pause()}
      position="relative"
    >
      <Box position="absolute" width="100%" height="100%" zIndex="1">
        <Box display="flex" jc="space-between" w="90%" p="m">
          <Text ta="center" fs="xl" m="0">
            Dato
          </Text>
          <Text ta="center" fs="xl" m="0">
            {number}
          </Text>
        </Box>
      </Box>
      <Box position="absolute" bottom="-0px" height="100%" zIndex="0">
        <Video autoPlay loop width="100%" height="100%" id={`card${number}`}>
          <source src={`video/card_${number}.mov`} type="video/mp4" />
        </Video>
      </Box>
    </MainBox>
  )

  const Back = (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        {back}
      </Text>
    </MainBox>
  )

  return { front: Front, back: Back }
}

const CardArray = [
  Card({ number: "01", back: "back01" }),
  Card({ number: "02", back: "back02" }),
  Card({ number: "03", back: "back03" }),
  Card({ number: "04", back: "back04" }),
  Card({ number: "05", back: "back05" }),
  Card({ number: "06", back: "back06" }),
  Card({ number: "07", back: "back07" }),
  Card({ number: "08", back: "back08" }),
  Card({ number: "09", back: "back09" }),
  Card({ number: "10", back: "back10" }),
]

console.log("CardArray", CardArray)

export default CardArray
