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

import { useEffect, useRef, useState } from "react";
// rellax
import Rellax from "rellax";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
// About Us page sections
import SimpleModal from "sections/BookNowModal";

// Images
import bgImage from "assets/images/products/product-3-min.jpeg";
import Information from "components/Custom/Information";

import Gallery from "pages/balitripdetail/sections/Gallery";
import BhutanTripTimeline from "pages/bhutantripdetail/sections/Timeline";
import TabsSimple from "components/Custom/TabsSimple";

function SingleArticle() {
  const headerRef = useRef(null);

  // Setting up rellax
  useEffect(() => {
    const parallax = new Rellax(headerRef.current, {
      speed: -6,
    });

    return () => parallax.destroy();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <MKBox
        ref={headerRef}
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" flexDirection="column">
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Explore Bhutan
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mb={2}
              mr={{ xs: 0, sm: 6 }}
              pr={{ xs: 0, sm: 6 }}
            >
              5 Days 4 Nights
            </MKTypography>
            <MKTypography variant="h5" color="white" mt={2} mb={1}>
              Starting from ₹ 28,500
            </MKTypography>
            <MKButton
              onClick={toggleModal}
              sx={{
                width: { xs: "100%", md: "200px" },
                backgroundColor: "#56d4bf",
                color: "white",
                "&:hover": {
                  backgroundColor: "#56d4bf" // disables hover effect by keeping the same color
                }
              }}
            >
              Book Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information
          title="🏔️ Beautiful Bhutan: 4 Days, 3 Nights Cultural & Scenic Journey"
          description={
            <>
              Thimphu • Paro • Tiger's Nest Monastery • Chele La Pass
              <br /><br />
              Immerse yourself in the serene landscapes and rich culture of Bhutan on this 4D/3N journey. From
              spiritual landmarks to breathtaking Himalayan views, this trip blends cultural exploration with
              natural beauty.
              <br /><br />
              Experience the capital city of Thimphu, marvel at the iconic Buddha Dordenma, hike to the
              legendary Tiger's Nest Monastery, and explore the charming Paro Valley. Perfect for travelers
              seeking a mix of adventure, tranquility, and cultural connection.
            </>
          }
        />
        <TabsSimple
          tabs={[
            { label: "Gallery", component: <Gallery /> },
            { label: "Timeline", component: <BhutanTripTimeline /> },
          ]}
        />
      </Card>
      <SimpleModal
        show={showModal}
        toggleModal={toggleModal}
        defaultMessage="I'm interested in your adventure tours to Kenya."
      />
    </>
  );
}

export default SingleArticle;
