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
            🇰🇪 Majestic Kenya: A Premium 5 Days, 4 Nights Safari & Culture Experience
          </MKTypography>
          <MKTypography variant="body2">
            Nairobi • Masai Mara National Reserve • Lake Naivasha • African Safari Adventure
            <br /> <br />
            Step into the heart of Africa with this unforgettable Kenyan journey — a stunning combination of untamed wildlife, breathtaking landscapes, and rich tribal heritage. This exclusive 5D/4N experience takes you deep into the famed Masai Mara, where the Big Five roam free and every sunset feels surreal.
            <br /> <br />
            Whether you're a first-time visitor to Africa or a seasoned explorer, this premium group tour delivers comfort, adventure, and cultural connection — all wrapped in a seamless, worry-free travel experience.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
