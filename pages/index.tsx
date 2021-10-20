import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import ThreatVolumeChart from "../components/ThreatVolumeChart";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Monitoring Dashboard</title>
        <meta name="description" content="Monitor your IaaS network for potential threats." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <ThreatVolumeChart/>
      </Container>
    </>
  );
}

export default Home;
