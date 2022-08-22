import Head from "next/head"

const MetaHead = () => {
  const image = "meta/test1.png"
  return (
    <Head>
      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:site" content="secuoyas-21" key="twsite" />
      <meta
        name="twitter:title"
        content="Cumplimos 21 años - Secuoyas"
        key="twtitle"
      />
      <meta
        name="twitter:description"
        content="21 cosas que no sabías de Secuoyas"
        key="twdescription"
      />
      <meta name="twitter:image" content={image} key="twimage" />
      {/* Facebook */}
      <meta
        property="og:title"
        content={"Cumplimos 21 años - Secuoyas"}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content="21 cosas que no sabías de Secuoyas"
        key="ogdescription"
      />
      <meta property="og:image" content={image} key="ogimage" />
      <meta property="og:url" content={"https://secuoyas-21.com/"} />
      <meta property="og:type" content="profile" key="ogtype" />
      <meta property="og:site_name" content={"secuoyas-21"} key="ogsitename" />
      <meta property="og:locale" content="en_US" key="oglocale" />
      <meta property="og:type" content="profile" key="ogtype" />
      <meta property="og:image:width" content="512" key="ogimagewidth" />
      <meta property="og:image:height" content="512" key="ogimageheight" />
      <meta property="og:image:type" content="image/jpeg" key="ogimagetype" />
      <meta
        property="og:image:alt"
        content="https://secuoyas-21.com/"
        key="ogimagealt"
      />
      <meta
        property="og:image:secure_url"
        content={image}
        key="ogimagesecureurl"
      />

      {/* Open Graph */}
      <meta
        property="og:url"
        content={"https://secuoyas-21.com/"}
        key="ogurl"
      />
      <meta property="og:image" content={image} key="ogimage" />
      <meta
        property="og:site_name"
        content={"https://secuoyas-21.com/"}
        key="ogsitename"
      />
      <meta
        property="og:title"
        content={"Cumplimos 21 años - Secuoyas"}
        key="ogtitle"
      />
      <meta name="description" content="21 cosas que no sabías de Secuoyas" />
      <meta
        property="og:description"
        content="21 cosas que no sabías de Secuoyas"
        key="ogdesc"
      />
      <title>{"21 años 🎉 Secuoyas"}</title>
    </Head>
  )
}

export default MetaHead
