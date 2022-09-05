import { Box, Icon, Link, Text } from "@impulse/components"
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { TiSocialInstagram } from "react-icons/ti"
import { SiMedium } from "react-icons/si"

const Footer = () => {
  return (
    <Box mw="1144px" m="0 auto">
      <Box
        b="3px solid black"
        p="xxl"
        mb="xxxl"
        style={{
          boxSizing: "border-box",
        }}
      >
        <Box mw="700px">
          <Text fs="xxl" fw="normal" ff="Gilroy-Bold">
            Somos Secuoyas.
          </Text>
          <Text m="0" mt="m">
            Un estudio de diseño estratégico e innovación liderado por un equipo
            de 56 profesionales empáticos, curiosos e inconformistas. Tenemos
            bagajes y talentos muy distintos, unidos por una sólida cultura que
            llevamos más de 20 años construyendo.
          </Text>
          <Text m="0" mt="m">
            Barcelona, Cantabria, Cork, Cuenca, Gotemburgo, Jerez, Madrid,
            Munich, Palma de Mallorca, Segovia, Valencia, Valladolid… Trabajamos
            codo con codo desde cualquier parte del mundo, siendo responsables
            con nuestro trabajo y confiando ciegamente los unos en los otros.
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection={{ default: "column", m: "row" }}
          ai={{ m: "end" }}
          jc="space-between"
          mt="l"
        >
          <Box mr="l" my="m">
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
          <Box mr="l" my="m">
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
          <Box my="m">
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

export default Footer
