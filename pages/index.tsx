import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar, Brand, CTA } from './components'
import { Header, WhatGPT3, Features, Possibility, Blog, Footer } from './containers'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles["gradient__bg"]}>
        <Navbar />
        <Header></Header>
    </div>
    <Brand></Brand>
    <WhatGPT3></WhatGPT3>
    <Features></Features>
    <Possibility></Possibility>
    <CTA></CTA>
    <Blog></Blog>
    <Footer></Footer>
    </>
  )
}

export default Home
