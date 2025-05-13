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
            ✨ The Ultimate Thailand Getaway: 5 Days, 4 Nights of Curated Experiences
          </MKTypography>
          <MKTypography variant="body2">
            Pattaya & Bangkok | Tiger Encounters | Island Escapes | Floating Markets | Safari World | Pirate Gala Cruise (Optional)
            <br /> <br />
            Step into a journey where culture meets comfort, and adventure blends with elegance. This meticulously designed 5-day, 4-night Thailand tour offers a seamless blend of relaxation, thrill, and rich cultural immersion — ideal for group travelers, families, and corporate outings.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
