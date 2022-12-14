import Head from "next/head"

const MetaHead = () => {
  const image = "https://cumple21.secuoyas.com/meta/secuoyas21.png"
  const url = "https://cumple21.secuoyas.com/"
  const title = "Cumplimos 21 años - Secuoyas"
  const description = "21 cosas que no sabías de Secuoyas"

  return (
    <Head>
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:site" content="@secuoyas" key="twsite" />
      <meta name="twitter:site" content="@secuoyas" key="twsite" />
      <meta name="twitter:title" content={title} key="twtitle" />
      <meta
        name="twitter:description"
        content={description}
        key="twdescription"
      />
      <meta name="twitter:image" content={image} key="twimage" />

      {/* Open Graph */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="profile" key="ogtype" />
      <meta property="og:site_name" content={"secuoyas-21"} key="ogsitename" />
      <meta property="og:locale" content="en_US" key="oglocale" />
      <meta property="og:type" content="profile" key="ogtype" />
      <meta property="og:image" content={image} key="ogimage" />
      <meta property="og:image:width" content="1200" key="ogimagewidth" />
      <meta property="og:image:height" content="627" key="ogimageheight" />
      <meta property="og:image:type" content="image/jpeg" key="ogimagetype" />
      <meta property="og:image:alt" content={url} key="ogimagealt" />
      <meta
        property="og:image:secure_url"
        content={image}
        key="ogimagesecureurl"
      />

      <title>{"21 años 🎉 Secuoyas"}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  )
}

export default MetaHead
