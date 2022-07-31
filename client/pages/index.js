import Head from "next/head";
import Image from "next/image";
import Nav from "./../components/Nav/index";
import HomeMain from "./../components/Home/index";
import Theme from "../utils/theme";

export default function Home() {
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
          <Nav />
          <HomeMain />
        </main>
      </div>
    </Theme>
  );
}
