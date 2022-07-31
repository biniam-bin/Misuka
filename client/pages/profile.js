import Head from "next/head";
import Image from "next/image";
import Nav from "./../components/Nav/index";
import Theme from "../utils/theme";
import ProfilePage from "../components/Profile";

function Profile() {
  return (
    <Theme>
      <div>
        <Head>
          <title>Profile - Musika</title>
          <meta
            name="description"
            content="The best music platform for ethiopia profile page"
          />
          <link rel="icon" href="/music1.png" />
        </Head>

        <main>
          {/* <Nav /> */}
          <ProfilePage/>
        </main>
      </div>
    </Theme>
  );
}

export default Profile;
