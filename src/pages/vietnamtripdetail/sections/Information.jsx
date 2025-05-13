/*
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={6} mt={6}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography variant="h3" mb={3}>
            🇻🇳 Timeless Vietnam: A Premium 5 Days, 4 Nights Experience
          </MKTypography>
          <MKTypography variant="body2">
            Hanoi • Ninh Binh • Halong Bay Cruise • Cultural Discovery • Scenic Landscapes
            <br /> <br />
            Step into the soul of Vietnam, where dramatic landscapes, ancient heritage, and vibrant modern life weave together into a magical journey. This thoughtfully curated 5D/4N group experience gives you the best of Northern Vietnam — breathtaking nature, rich culture, world-famous cuisine, and luxurious comfort.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
