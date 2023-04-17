import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
    const description = "Home Runs For Hope is a charity teachers vs students baseball game being hosted at St. Francis Xavier SS, in Mississauga, on June 1st."

    return (
      <>
        <Head>
          <title>HomeRunsForHope</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.ico" />
        </Head>
        <Component {...pageProps} />
      </>
  )
}
