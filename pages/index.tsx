import Grid from "@react-css/grid";
import type { NextPage } from "next";
import Head from "next/head";
import AlertSummary from "../components/AlertSummary";
import Container from "../components/Container";
import ThreatCategoryChart from "../components/ThreatCategoryChart";
import ThreatVolumeChart from "../components/ThreatVolumeChart";

function mockAlerts() {
  const alerts = [];
  for (let i = 1; i <= 5; i++) {
    alerts.push({
      id: i,
      name: `Alert ${i}`,
      description: "This is an example alert",
    })
  }
  return alerts;
}

const alertData = mockAlerts();

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
            <h2>Threats This Week</h2>
            <ThreatVolumeChart/>
          </Grid.Item>

          <Grid.Item column="1 / 2">
            <h2>Recent Alerts</h2>
            {
              alertData.map(
                alert => 
                  <AlertSummary key={alert.id} id={`${alert.id}`} name={alert.name} description={alert.description} />
              )
            }
          </Grid.Item>

          <Grid.Item column="2 / span 2">
            <h2>Threats by Category</h2>
            <ThreatCategoryChart />
          </Grid.Item>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
