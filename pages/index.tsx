import Homepage from "../components/homepage";
import Layout from "../components/layout";
import { useSession, getSession } from "next-auth/react";
import Loading from "../components/loading";
import getCurrentSong from "../lib/getCurrentSong";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  //@ts-ignore
  const accessToken = session!.accessToken;
  if (accessToken) {
    const res = await getCurrentSong(accessToken);
    console.log(res.status);

    //return nothing if user not playing any song
    if (res.status === 204 || res.status > 400) {
      return { props: {} };
    }

    //return current song if user play something
    const data = await res.json();
    const {
      timestamp,
      item: {
        artists,
        name,
        duration_ms,
        album: { images },
      },
      progress_ms,
    } = data;

    return {
      props: {
        artists,
        name,
        duration_ms,
        progress_ms,
        timestamp,
        images,
      },
    };
  } else {
    return { props: {} };
  }
};

interface HomeProps {
  artists: [{ name: string }];
  name: string;
  duration_ms: number;
  progress_ms: number;
  timestamp: number;
  images: [];
}

export default function Home(props: HomeProps) {
  const { artists, name, duration_ms, progress_ms, timestamp, images } = props;
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-screen flex">
        <Loading large />
      </div>
    );
  } else if (!session) {
    window.location.href = "/login";
    return null;
  }

  return (
    <Layout passedData={session}>
      <Homepage
        artists={artists}
        name={name}
        duration_ms={duration_ms}
        progress_ms={progress_ms}
        timestamp={timestamp}
        images={images}
      />
    </Layout>
  );
}
