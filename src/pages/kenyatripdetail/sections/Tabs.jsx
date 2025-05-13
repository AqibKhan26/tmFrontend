import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Gallery from "pages/kenyatripdetail/sections/Gallery";

// Example components to render

function Timeline() {
  return <Box p={2}>Timeline content will be here.</Box>;
}

function TabsSimple() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <Container>
      <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
        <AppBar position="static">
          <Tabs value={activeTab} onChange={handleTabType} variant="fullWidth">
            <Tab label="Gallery" />
            <Tab label="Timeline" />
          </Tabs>
        </AppBar>
      </Grid>

      <Grid container item xs={12} mt={4}>
        {activeTab === 0 && <Gallery />}
        {activeTab === 1 && <Timeline />}
      </Grid>
    </Container>
  );
}

export default TabsSimple;
