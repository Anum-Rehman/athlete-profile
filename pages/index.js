import Head from 'next/head'
import Stepper from '../components/Stepper'
import About from '../components/About'
import Summary from '../components/Summary'

export default function Home() {
  return (
    <>
      <Head>
        <title>Athlete App</title>
        <meta name="description" content="A simple Athlete profile app where an Athelete can save his/her info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stepper/>
      <About/>
      {/* <Summary/> */}
    </>
  )
}
