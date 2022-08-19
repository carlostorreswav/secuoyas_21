import { Box, Text } from "@impulse/components"
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

const Card01 = {
  front: (
    <MainBox
      onMouseEnter={() => document.getElementById("vid01").play()}
      onMouseLeave={() => document.getElementById("vid01").pause()}
      position="relative"
    >
      <Box position="absolute" width="100%" height="100%" zIndex="1">
        <Text ta="center" fs="xl" fw="bold" m="0">
          Front
        </Text>
      </Box>
      <Box position="absolute" bottom="-0px" height="100%" zIndex="0">
        <Video autoPlay loop width="100%" height="100%" id="vid01">
          <source src="video/test1.mov" type="video/mp4" />
        </Video>
      </Box>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card02 = {
  front: (
    <MainBox
      onMouseEnter={() => document.getElementById("vid02").play()}
      onMouseLeave={() => document.getElementById("vid02").pause()}
      position="relative"
    >
      <Box position="absolute" width="100%" height="100%" zIndex="1">
        <Text ta="center" fs="xl" fw="bold" m="0">
          Front
        </Text>
      </Box>
      <Box position="absolute" bottom="-0px" height="100%" zIndex="0">
        <Video autoPlay loop width="100%" height="100%" id="vid02">
          <source src="video/test1.mov" type="video/mp4" />
        </Video>
      </Box>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card03 = {
  front: (
    <MainBox
      onMouseEnter={() => document.getElementById("vid03").play()}
      onMouseLeave={() => document.getElementById("vid03").pause()}
      position="relative"
    >
      <Box position="absolute" width="100%" height="100%" zIndex="1">
        <Text ta="center" fs="xl" fw="bold" m="0">
          Front
        </Text>
      </Box>
      <Box position="absolute" bottom="-0px" height="100%" zIndex="0">
        <Video autoPlay loop width="100%" height="100%" id="vid03">
          <source src="video/test1.mov" type="video/mp4" />
        </Video>
      </Box>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card04 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card05 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card06 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card07 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card08 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card09 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card10 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card11 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card12 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card13 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card14 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card15 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card16 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card17 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card18 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card19 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card20 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

const Card21 = {
  front: (
    <MainBox>
      <Text ta="center" fs="xl" fw="bold" m="0">
        Front
      </Text>
    </MainBox>
  ),
  back: (
    <MainBox bg="ui02">
      <Text ta="center" fs="xl" fw="bold" m="0" color="ui01">
        Back
      </Text>
    </MainBox>
  ),
}

export default [
  { ...Card01, number: "01" },
  { ...Card02, number: "02" },
  { ...Card03, number: "03" },
  { ...Card04, number: "04" },
  { ...Card05, number: "05" },
  { ...Card06, number: "06" },
  { ...Card07, number: "07" },
  { ...Card08, number: "08" },
  { ...Card09, number: "09" },
  { ...Card10, number: "10" },
  { ...Card11, number: "11" },
  { ...Card12, number: "12" },
  { ...Card13, number: "13" },
  { ...Card14, number: "14" },
  { ...Card15, number: "15" },
  { ...Card16, number: "16" },
  { ...Card17, number: "17" },
  { ...Card18, number: "18" },
  { ...Card19, number: "19" },
  { ...Card20, number: "20" },
  { ...Card21, number: "21" },
]
