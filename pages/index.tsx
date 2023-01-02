import Homepage from "../components/homepage";
import Layout from "../components/layout";
import { useSession } from "next-auth/react";
import Loading from "../components/loading";

export default function Home(props: any) {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "loading") {
    return (
      <div className="h-screen flex">
        <Loading large />;
      </div>
    );
  } else if (status === "unauthenticated") {
    window.location.href = "/login";
    return null;
  }

  return (
    <Layout>
      <Homepage accessToken="x" />
    </Layout>
  );
}
