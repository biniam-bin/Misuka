import React from 'react'
import Head from "next/head";
import LoginComponent from '../components/Login'
import Theme from "../utils/theme";


function Login() {
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
            <LoginComponent />
          </main>
        </div>
      </Theme>
    );
}

export default Login