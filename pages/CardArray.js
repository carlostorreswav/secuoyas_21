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
  `https://twitter.com/intent/tweet?text=${text}&url=${process.env.URL}&hashtags=secuoyas&via=secuoyas`

const shareLinkedIn = text =>
  `https://www.linkedin.com/shareArticle?mini=true&text=${text}&url=${process.env.URL}`

const Card = ({ number, back, date, position }) => {
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
      <Box
        // position="absolute"
        height="100%"
        zIndex="1"
        // bottom={position === "down" && 0}
        // bottom="0"
        width="100%"
        position="relative"
      >
        <Box
          position="absolute"
          bottom={position === "down" && "0"}
          width="100%"

          // mt="s"
        >
          <Box display="flex" jc="space-between" m="l" my="xl">
            <Text fs="xl" m="0" fontFamily="Gilroy" fw="600">
              CURIOSIDAD
            </Text>
            <Text fs="xl" m="0" fontFamily="Gilroy" fw="600">
              {number}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom="-0px"
        height="100%"
        width="100%"
        zIndex="0"
        display={{ default: "none", s: "block" }}
      >
        <Video muted loop width="100%" height="100%" id={`card${number}`}>
          <source src={`video/card_${number}.mov`} type="video/mp4" />
        </Video>
      </Box>
      <Box
        position="absolute"
        bottom="-0px"
        height="100%"
        width="100%"
        zIndex="0"
        display={{ default: "block", s: "none" }}
      >
        <Video
          muted
          loop
          width="100%"
          height="100%"
          poster={`poster/${number}.png`}
          id={`card${number}`}
        >
          <source src={`video/card_${number}.mov`} type="video/mp4" />
        </Video>
      </Box>
    </MainBox>
  )

  const Back = (
    <MainBox bg="#101010" color="white" position="relative" overflow="hidden">
      <Box position="absolute" p="l" mt="s">
        <Text ta="center" fs="xl" fw="bold" m="0" color="ui01"></Text>
        <Box display="flex" jc="space-between">
          <Text ta="center" fs="xl" m="0" fontFamily="Gilroy" fw="600">
            ¿SABÍAS QUE...
          </Text>
          <Text ta="center" fs="xl" m="0" fontFamily="Gilroy" fw="600">
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
      return shareTwitter(`¿Sabías que ${text}`)
    }
    if (type === "linkedIn") {
      return shareLinkedIn(`¿Sabías que ${text}`)
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
        <Icon src={src} h={30} w={30} color={hover ? "#101010" : "white"} />
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

const Texts = {
  c01: "nacimos el 11 de septiembre de 2001? Todo el mundo se acuerda qué estaba haciendo ese día.",
  c02: "cuando se fundó la compañía nos llamábamos Secuoyas Experience? Es curioso porque hace 21 años nadie hablaba de experiencia de usuario y nosotros tampoco lo hacíamos. Y ahora es nuestro core.",
  c03: "tenemos pasados muy heterogéneos? Pastelera creativa, portero, militar, concursante de Masterchef, compositor musical, ingeniero de un equipo de Rallyes, periodista… Un background muy amplio que nos convierte en un equipo multidisciplinar.",
  c04: "en 2020 éramos 26 personas en Secuoyas y hoy somos 56? En dos años el equipo se ha multiplicado, especialmente el área de desarrollo, en la cual empezaron siendo 3 developers y hoy suman 19.",
  c05: "no publicamos nunca ofertas de empleo? Nos lleva más tiempo, pero preferimos salir a buscarte.",
  c06: "a veces hay que decir no a un proyecto por el bien del equipo, y lo hemos hecho?",
  c07: "somos una empresa full remote desde hace casi 3 años? Pero antes de eso llevábamos 12 años en un formato híbrido (2 días de oficina, 3 días de teletrabajo).",
  c08: "cada mañana nos damos los buenos días cuando nos conectamos? Las buenas maneras se cuidan también en remoto.",
  c09: "nuestros procesos de recruiting y onboarding los diseñó el equipo en 2015? Y es que la llegada de Daniel Serrano marcó un antes y un después en la compañía.",
  c10: "el color negro de Secuoyas no es un negro puro, sino #101010? Un guiño a lo digital y tecnológico, pues el color se compone de los dígitos “1” y “0”, como el sistema de codificación binario.",
  c11: "todos los viernes el algoritmo decide con qué compañeros tomamos un café? La mejor manera de conocer a todo el equipo aunque estemos en remoto.",
  c12: "la edad media del equipo de Secuoyas es de 39 años?",
  c13: "un tercio del equipo toca algún instrumento musical? Bajo, batería, clarinete, guitarra, piano y ukelele son los que mejor dominamos.",
  c14: "los equipos asignados a un proyecto, sólo trabajan para ese cliente?",
  c15: "desde que somos full remote 14 personas han cambiado de ciudad… y de vida? Algunos de manera temporal, durante los meses de verano, otros de manera permanente, llegando incluso a traspasar fronteras.",
  c16: "Secuoyas ha tenido 4 CEOs, y 3 de ellos siguen en la compañía?",
  c17: "además de los proyectos con cliente, desarrollamos proyectos propios? Griddo es el más importante de ellos, y en él trabajan permanentemente 12 personas del equipo.",
  c18: "antes de incorporar a una persona a Secuoyas se consulta con el equipo por si alguien tiene algo en contra? ¡Como en las bodas!",
  c19: "en Secuoyas reservamos un 20% de nuestro tiempo para explorar y probar cosas nuevas? Hemos diseñado distintos modelos de aprendizaje para que podamos combinar nuestra jornada laboral con formaciones tanto para el equipo como para uno mismo.",
  c20: "en 2021 incorporamos el departamento de data en la compañía y a día de hoy cuenta con 4 expertos en la materia?",
  c21: "la “S” al revés de nuestro logo no es solo una cuestión estética? Simboliza la forma que tenemos en Secuoyas de resolver problemas: dándoles “la vuelta” para tener una visión mucho más completa y precisa de las cosas. ",
}

const CardArray = [
  Card({
    number: "01",
    back: Texts.c01,
    date: "9/01/2022",
    position: "up",
  }),
  Card({
    number: "02",
    back: Texts.c02,
    date: "9/02/2022",
    position: "up",
  }),
  Card({
    number: "03",
    back: Texts.c03,
    date: "9/05/2022",
    position: "up",
  }),
  Card({
    number: "04",
    back: Texts.c04,
    date: "9/06/2022",
    position: "down",
  }),
  Card({
    number: "05",
    back: Texts.c05,
    date: "9/07/2022",
    position: "down",
  }),
  Card({
    number: "06",
    back: Texts.c06,
    date: "9/08/2022",
    position: "down",
  }),
  Card({
    number: "07",
    back: Texts.c07,
    date: "9/09/2022",
    position: "up",
  }),
  Card({
    number: "08",
    back: Texts.c08,
    date: "9/12/2022",
    position: "up",
  }),
  Card({
    number: "09",
    back: Texts.c09,
    date: "9/13/2022",
    position: "up",
  }),
  Card({
    number: "10",
    back: Texts.c10,
    date: "9/14/2022",
    position: "down",
  }),
  Card({
    number: "11",
    back: Texts.c11,
    date: "9/15/2022",
    position: "down",
  }),
  Card({
    number: "12",
    back: Texts.c12,
    date: "9/16/2022",
    position: "down",
  }),
  Card({
    number: "13",
    back: Texts.c13,
    date: "9/19/2022",
    position: "up",
  }),
  Card({
    number: "14",
    back: Texts.c14,
    date: "9/20/2022",
    position: "up",
  }),
  Card({
    number: "15",
    back: Texts.c15,
    date: "9/21/2022",
    position: "up",
  }),
  Card({
    number: "16",
    back: Texts.c16,
    date: "9/22/2022",
    position: "down",
  }),
  Card({
    number: "17",
    back: Texts.c17,
    date: "9/23/2022",
    position: "down",
  }),
  Card({
    number: "18",
    back: Texts.c18,
    date: "9/26/2022",
    position: "down",
  }),
  Card({
    number: "19",
    back: Texts.c19,
    date: "9/27/2022",
    position: "up",
  }),
  Card({
    number: "20",
    back: Texts.c20,
    date: "9/28/2022",
    position: "up",
  }),
  Card({
    number: "21",
    back: Texts.c21,
    date: "9/29/2022",
    position: "up",
  }),
]

export default CardArray
