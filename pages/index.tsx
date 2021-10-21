import Grid from "@react-css/grid";
import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import ThreatCategoryChart from "../components/ThreatCategoryChart";
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
        <Grid columns="1fr 1fr" gap="2em">
          <Grid.Item column="1 / span 2">
            <ThreatVolumeChart/>
          </Grid.Item>

          <Grid.Item column="1 / 2">
            <h2>Recent Alerts</h2>
          </Grid.Item>

          <Grid.Item column="2 / span 2">
            <ThreatCategoryChart />
          </Grid.Item>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
