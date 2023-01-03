import Layout from "../components/layout";
import { useSession } from "next-auth/react";

const About = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout passedData={session}>
      <div>About</div>
    </Layout>
  );
};
export default About;
