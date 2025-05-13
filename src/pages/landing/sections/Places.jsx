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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React components
import SimpleBookingCard from "sections/Cards/BookingCards/SimpleBookingCard";

// Images
import thailandPic from "assets/images/products/product-1-min.jpg";
import vietnamPic from "assets/images/products/product-2-min.jpeg";
import kenyaPic from "assets/images/products/product-3-min.jpeg";

function Places() {
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/rental",
    color: "info",
    label: "More Details",
  };

  return (
    <MKBox component="section" py={3}>
      <MKTypography
        variant="h3"
        color="black"
        align="center"
        sx={({ breakpoints, typography: { size }, spacing }) => ({
          mb: spacing(3),
          [breakpoints.down("md")]: {
            fontSize: size["3xl"],
          },
        })}
      >
        Handpicked Travel Experiences Just for You
      </MKTypography>

      <Container>
        <MKBox
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={3}
          sx={{ mt: 3 }}
        >
          <MKBox
            flex="1 1 calc(33.333% - 24px)"
            minWidth="300px"
            maxWidth="400px"
            mt={3}
          >
            <SimpleBookingCard
              image={vietnamPic}
              title="Vietnam"
              description="Explore Vietnam in 5 days! Discover Hanoi’s rich history, cruise the stunning Halong Bay, trek Mua Cave, visit ancient Trang An, and experience vibrant Ho Chi Minh City. Perfect blend of culture, nature & adventure with comfort—ideal for groups!"
              categories={["5 Days", "4 Nights", "Starting ₹ 22,999"]}
              action={{
                type: "internal",
                route: "/vietnam",
                color: "info",
                label: "More Details",
              }}
            />
          </MKBox>

          <MKBox
            flex="1 1 calc(33.333% - 24px)"
            minWidth="300px"
            maxWidth="400px"
            mt={3}
          >
            <SimpleBookingCard
              image={thailandPic}
              title="Thailand"
              description="Experience the best of Thailand in 5 days! Visit Pattaya’s Tiger Topia, Coral Island, and Big Buddha; enjoy the floating market, Safari World, and Bangkok’s iconic temples. Optional pirate boat dinner cruise!"
              categories={["5 Days", "4 Nights", "Starting ₹ 18,999"]}
              action={{
                type: "internal",
                route: "/thailand",
                color: "info",
                label: "More Details",
              }}
            />
          </MKBox>

          <MKBox
            flex="1 1 calc(33.333% - 24px)"
            minWidth="300px"
            maxWidth="400px"
            mt={3}
          >
            <SimpleBookingCard
              image={kenyaPic}
              title="Kenya"
              description="Experience the thrill of Kenya’s wild beauty on this 8-day journey. Explore Nairobi, Lake Nakuru, and the legendary Masai Mara in a private 4x4. Enjoy luxury stays, stunning wildlife, and unforgettable moments in the heart of Africa."
              categories={["8 Days", "7 Nights", "Starting ₹ 69,999"]}
              action={{
                type: "internal",
                route: "/kenya",
                color: "info",
                label: "More Details",
              }}
            />
          </MKBox>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Places;
