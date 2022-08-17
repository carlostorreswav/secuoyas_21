import "../styles/globals.css"
import { ImpulseProvider } from "@impulse/contexts"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ImpulseProvider>
        <Component {...pageProps} />
      </ImpulseProvider>
    </>
  )
}

export default MyApp
