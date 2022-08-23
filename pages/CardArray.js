import { Box, Icon, Link, Text } from "@impulse/components"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaLinkedinIn, FaShareAlt } from "react-icons/fa"
import styled from "styled-components"
import { useState } from "react"

const MainBox = styled(Box)`
  height: 100%;
`

const Video = styled.video`
  /* width: 100%;
  height: 100%; */
  object-fit: cover;
  object-position: center;
`

const shareTwitter = text =>
  `https://twitter.com/intent/tweet?text=${text}&hashtags=secuoyas&via=secuoyas`

const shareLinkedIn = text =>
  `https://www.linkedin.com/shareArticle?mini=true&url=${text}&title=${text}&summary=${text}&source=${text}`

const Card = ({ number, back, date }) => {
  // const now = new Date()
  // const cardDate = new Date(date)

  // const unlocked = now > cardDate
  // const todayCard = now.getDate() === cardDate.getDate()

  const Front = (
    <MainBox
      onMouseEnter={() => document.getElementById(`card${number}`).play()}
      onMouseLeave={() => document.getElementById(`card${number}`).pause()}
      position="relative"
      // style={{ filter: !unlocked && "blur(10px)" }}
    >
      <Box position="absolute" width="100%" height="100%" zIndex="1">
        <Box display="flex" jc="space-between" p="l" mt="s">
          <Text fs="xl" m="0" fontFamily="Work Sans">
            DATO
          </Text>
          <Text fs="xl" m="0" fontFamily="Work Sans">
            {number}
          </Text>
        </Box>
      </Box>
      <Box position="absolute" bottom="-0px" height="100%" zIndex="0">
        <Video loop width="100%" height="100%" id={`card${number}`}>
          <source src={`video/card_${number}.mov`} type="video/mp4" />
        </Video>
      </Box>
    </MainBox>
  )

  const Back = (
    <MainBox bg="ui02" color="white" position="relative" overflow="hidden">
      <Box position="absolute" p="l" mt="s">
        <Text ta="center" fs="xl" fw="bold" m="0" color="ui01"></Text>
        <Box display="flex" jc="space-between">
          <Text ta="center" fs="xl" m="0">
            ¿SABÍAS QUE...
          </Text>
          <Text ta="center" fs="xl" m="0">
            {number}
          </Text>
        </Box>
        <Box mt="m" maxHeight="340px" overflow="hidden">
          <Text ta="left" fs="l" m="0" fontFamily="Work Sans">
            {back}
          </Text>
        </Box>
      </Box>
      <Box
        position="absolute"
        zIndex="2"
        bottom="0"
        px="m"
        py="s"
        display="flex"
        right="0"
      >
        <SocialIcon src={AiOutlineTwitter} type="twitter" text={back} />
        <SocialIcon src={FaLinkedinIn} type="linkedIn" text={back} />
      </Box>
    </MainBox>
  )

  return { front: Front, back: Back, date }
}

const SocialIcon = ({ src, type, text }) => {
  const [hover, setHover] = useState(false)

  const getHREF = (type, text) => {
    if (type === "twitter") {
      return shareTwitter(text)
    }
    if (type === "linkedIn") {
      return shareLinkedIn(text)
    }
  }

  return (
    <Link href={getHREF(type, text)}>
      <Box
        display="flex"
        b={"3px solid white"}
        bg={hover && "white"}
        br="50%"
        p={hover ? "20px" : "10px"}
        m={hover ? "0px" : "10px"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Icon src={src} h={30} w={30} color={hover ? "#E55140" : "white"} />
      </Box>
    </Link>
  )
}

const Lorem = num => {
  const base =
    "Lorem ipsum dolor sit amet em ipsum dolor sit a um dolor sit amet amet em ipsum dolor"
  const text = base.repeat(num)
  return text
}

const CardArray = [
  Card({ number: "01", back: Lorem(1), date: "8/01/2022" }),
  Card({ number: "02", back: Lorem(2), date: "8/02/2022" }),
  Card({ number: "03", back: Lorem(3), date: "8/05/2022" }),
  Card({ number: "04", back: Lorem(4), date: "8/06/2022" }),
  Card({ number: "05", back: Lorem(5), date: "8/07/2022" }),
  Card({ number: "06", back: Lorem(4), date: "8/08/2022" }),
  Card({ number: "07", back: Lorem(3), date: "8/09/2022" }),
  Card({ number: "08", back: Lorem(2), date: "8/12/2022" }),
  Card({ number: "09", back: Lorem(1), date: "8/13/2022" }),
  Card({ number: "10", back: Lorem(2), date: "8/14/2022" }),
  Card({ number: "11", back: Lorem(3), date: "8/15/2022" }),
  Card({ number: "12", back: Lorem(4), date: "8/16/2022" }),
  Card({ number: "13", back: Lorem(5), date: "8/19/2022" }),
  Card({ number: "14", back: Lorem(4), date: "8/20/2022" }),
  Card({ number: "15", back: Lorem(3), date: "8/21/2022" }),
  Card({ number: "16", back: Lorem(2), date: "8/22/2022" }),
  Card({ number: "17", back: Lorem(1), date: "8/23/2022" }),
  Card({ number: "18", back: Lorem(2), date: "8/26/2022" }),
  Card({ number: "19", back: Lorem(3), date: "8/27/2022" }),
  Card({ number: "20", back: Lorem(4), date: "8/28/2022" }),
  Card({ number: "21", back: Lorem(5), date: "8/29/2022" }),
]

export default CardArray
