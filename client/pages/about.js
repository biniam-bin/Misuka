import Head from "next/head";
import Image from "next/image";
import Nav from "./../components/Nav/index";
import Theme from "../utils/theme";

function About() {
  return (
    <Theme>
      <div>
        <Head>
          <title>About - Musika</title>
          <meta
            name="description"
            content="The best music platform for ethiopia about page"
          />
          <link rel="icon" href="/music1.png" />
        </Head>

        <main>
          <Nav />
        </main>
      </div>
    </Theme>
  );
}

export default About;
