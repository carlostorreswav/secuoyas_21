import styled from "styled-components"
import { useRef, useState } from "react"
import { useSpring, animated } from "react-spring"

const STYLEDCARD3D = styled(animated.div)`
  /* box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 1); */
  transition: box-shadow 0.5s;
  will-change: transform;
`
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card3D = ({
  children,
  factorX = 25,
  factorY = 25,
  zoom = 1.1,
  offSetX = 0,
  offSetY = 0,
  active = true,
}) => {
  const calc = (x, y) => {
    const top = card3DRef.current.getBoundingClientRect().top
    const left = card3DRef.current.getBoundingClientRect().left
    const bottom = card3DRef.current.getBoundingClientRect().bottom
    const right = card3DRef.current.getBoundingClientRect().right
    const centerx = (left + right) / 2
    const centery = (top + bottom) / 2
    const realx = x - centerx + offSetX
    const realy = y - centery + offSetY
    const x1 = realx / factorX
    const y1 = realy / factorY
    return [-y1, x1, zoom]
  }

  const card3DRef = useRef(null)

  const [springProps, setSpringProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const [hover, setHover] = useState(false)

  const CustomSetSpringProps = (value, open) => {
    if (active) {
      setSpringProps(value)
    }
    setHover(open)
  }

  return (
    <STYLEDCARD3D
      onMouseMove={({ clientX: x, clientY: y }) =>
        active
          ? CustomSetSpringProps({ xys: calc(x, y) }, true)
          : setHover(true)
      }
      onMouseLeave={() =>
        active
          ? CustomSetSpringProps({ xys: [0, 0, 1] }, false)
          : setHover(false)
      }
      style={{
        transform: springProps.xys.to(trans),
        position: "relative",
        zIndex: `${hover ? "9" : "0"}`,
      }}
      ref={card3DRef}
    >
      {children}
    </STYLEDCARD3D>
  )
}

export default Card3D
