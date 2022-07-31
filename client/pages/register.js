import React from 'react'
import RegisterComponent from './../components/Register';
import Head from "next/head";
import Image from "next/image";
import Theme from "../utils/theme";


const Register = () => {
  return (
    <Theme>
      <div>
        <Head>
          <title>Musika</title>
          <meta
            name="description"
            content="The best music platform for ethiopia"
          />
          <link rel="icon" href="/music1.png" />
        </Head>

        <main>
          <RegisterComponent/>
        </main>
      </div>
    </Theme>
  )
}

export default Register