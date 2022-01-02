import Head from "next/head";
import Image from "next/image";
import React, { useContext } from "react";
import Signin from "../components/signin";

import Featured from "../components/Featured";
import HomePageList from "../components/HomeList";
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
          <Featured />
          <HomePageList />
        </>
      ) : (
        <Signin />
      )}
    </div>
  );
}
