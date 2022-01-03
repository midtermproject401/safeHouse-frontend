import Head from "next/head";
import React, { useContext } from "react";
import Signin from "../components/signin";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Service from "../components/Service";
import About from "../components/About";

import styles from "../styles/Home.module.css";
import { LoginContext } from "../context/loginContext";

export default function Home() {
  const { loggedIn, can } = useContext(LoginContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Safe House</title>
        <meta name="description" content="Best house renting website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loggedIn ? (
        <>
          <Hero />
          <Feature />
          <Service />
          <About />
        </>
      ) : (
        <Signin />
      )}
    </div>
  );
}
