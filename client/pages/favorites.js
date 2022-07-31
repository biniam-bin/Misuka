import Head from "next/head";
import Image from "next/image";
import Nav from "./../components/Nav/index";
import Theme from "../utils/theme";
import FavoritesPage from "../components/Favorites";

function Favorites() {
  return (
    <Theme>
      <div>
        <Head>
          <title>My Favorites - Musika</title>
          <meta
            name="description"
            content="The best music platform for ethiopia favorites page"
          />
          <link rel="icon" href="/music1.png" />
        </Head>

        <main>
          <Nav />
          <FavoritesPage/>
        </main>
      </div>
    </Theme>
  );
}

export default Favorites;
