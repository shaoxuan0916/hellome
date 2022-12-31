import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  )
}
