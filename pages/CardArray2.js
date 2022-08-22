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

const Card = ({ number, back, date }) => {
  const now = new Date()
  const cardDate = new Date(date)

  const unlocked = now > cardDate
  const todayCard = now.getDate() === cardDate.getDate()

  const Front = (
    <MainBox
      onMouseEnter={() =>
        unlocked && document.getElementById(`card${number}`).play()
      }
      onMouseLeave={() =>
        unlocked && document.getElementById(`card${number}`).pause()
      }
      position="relative"
      style={{ filter: !unlocked && "blur(10px)" }}
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

  return { front: Front, back: Back, unlocked, todayCard }
}

const CardArray = [
  Card({ number: "01", back: "back", date: "8/01/2022" }),
  Card({ number: "02", back: "back", date: "8/02/2022" }),
  Card({ number: "03", back: "back", date: "8/05/2022" }),
  Card({ number: "04", back: "back", date: "8/06/2022" }),
  Card({ number: "05", back: "back", date: "8/07/2022" }),
  Card({ number: "06", back: "back", date: "8/08/2022" }),
  Card({ number: "07", back: "back", date: "8/09/2022" }),
  Card({ number: "08", back: "back", date: "8/12/2022" }),
  Card({ number: "09", back: "back", date: "8/13/2022" }),
  Card({ number: "10", back: "back", date: "8/14/2022" }),
  Card({ number: "11", back: "back", date: "8/15/2022" }),
  Card({ number: "12", back: "back", date: "8/16/2022" }),
  Card({ number: "13", back: "back", date: "8/19/2022" }),
  Card({ number: "14", back: "back", date: "8/20/2022" }),
  Card({ number: "15", back: "back", date: "8/21/2022" }),
  Card({ number: "16", back: "back", date: "8/22/2022" }),
  Card({ number: "17", back: "back", date: "8/23/2022" }),
  Card({ number: "18", back: "back", date: "8/26/2022" }),
  Card({ number: "19", back: "back", date: "8/27/2022" }),
  Card({ number: "20", back: "back", date: "8/28/2022" }),
  Card({ number: "21", back: "back", date: "8/29/2022" }),
]

console.log("CardArray", CardArray)

export default CardArray
