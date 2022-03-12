import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FooterSection from './footer'
import NavBar from './navbar'
import FirstSection from './firstsection'
import SecondSection from './SecondSection'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Furniture app</title>
        <meta name="furniture from Bonn" content="Best furniture in Bonn" />
        <link rel="icon" href="/static/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap" rel="stylesheet"></link>
     
      </Head>

      <main className={styles.main}>
      <NavBar />

      <FirstSection />
      <SecondSection />
      </main>

      <FooterSection />
   </div>
  )
}
