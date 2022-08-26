import { Box, Icon, Link, Text } from "@impulse/components"
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { TiSocialInstagram } from "react-icons/ti"
import { SiMedium } from "react-icons/si"

const Footer = () => {
  return (
    <Box mw="1150px" m="0 auto">
      <Box b="3px solid black" p="xxl" my="xxxl">
        <Box mw="700px">
          <Text fs="xxl" fw="normal" ff="Gilroy-Bold">
            Somos 100% remotos
          </Text>
          <Text m="0" mt="m">
            Madrid, Valencia, Murcia, Cuenca, Toledo, Ciudad Real, Valladolid,
            Segovia, Castellón, Tarragona, Munich... ¡No hace falta estar al
            lado para ser un equipo!
          </Text>
        </Box>
        <Box display="flex" ai="end" jc="space-between" mt="l">
          <Box mr="l" mt="m">
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
          <Box mr="l" mt="m">
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
          <Box>
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
