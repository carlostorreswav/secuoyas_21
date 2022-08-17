import { Box, Icon } from "./components"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { useState } from "react"

const InfoBox = ({ children, info, size, ...props }) => {
  const [hover, setHover] = useState(false)
  return (
    <Box position="relative">
      <Box position="absolute" top="0" right="0" {...props}>
        <Icon
          src={BsFillInfoCircleFill}
          h={20}
          w={20}
          color="orange"
          cursor="pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </Box>
      <Box
        position="absolute"
        top="15px"
        right="15px"
        zIndex={hover ? "99999999" : "0"}
        {...props}
      >
        <Box
          pointerEvents="none"
          bg="black"
          p="s"
          br="8px"
          opacity={hover ? 1 : 0}
        >
          {info}
        </Box>
      </Box>
      {children}
    </Box>
  )
}

export default InfoBox
