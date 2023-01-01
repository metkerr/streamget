import { GetServerSideProps } from "next";
import Homepage from "../components/homepage";
import Layout from "../components/layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context.query?.code;
  if (!code) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: {} };
};

interface IndexProps {
  accessToken?: string;
}

export default function Home({ accessToken }: IndexProps) {
  return (
    <Layout>
      <Homepage accessToken="x" />
    </Layout>
  );
}
