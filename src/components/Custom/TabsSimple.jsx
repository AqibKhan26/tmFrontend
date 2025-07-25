import PropTypes from "prop-types";
import { useState } from "react";
import { Container, Grid, AppBar, Tabs, Tab } from "@mui/material";

function TabsSimple({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <Container>
      <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
        <AppBar position="static">
          <Tabs value={activeTab} onChange={handleTabType} variant="fullWidth">
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </AppBar>
      </Grid>

      <Grid container item xs={12} mt={4}>
        {tabs[activeTab]?.component}
      </Grid>
    </Container>
  );
}

TabsSimple.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default TabsSimple;
