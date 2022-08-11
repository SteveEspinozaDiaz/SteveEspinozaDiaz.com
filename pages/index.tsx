import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles["main-container"]}>
      <Head>
        <title>Home | Steve Espinoza Diaz</title>
        <meta name="author" content="Steve Espinoza Diaz" />
        <meta name="description" content="Personal website for Steve Espinoza Diaz" />
        <meta name="keywords" content="Steve Espinoza Diaz, Physics, Math, Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles['main-title']}>SteveEspinozaDiaz.com</h1>
    </div>
  )
}

export default Home
