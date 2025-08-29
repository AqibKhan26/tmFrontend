import React from "react";
import Container from "@mui/material/Container";
import { useTheme, useMediaQuery } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SimpleBookingCard from "sections/Cards/BookingCards/SimpleBookingCard";
import Carousel from "react-material-ui-carousel";
import cards from "data/cardsData";

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function Places() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // small screens

  // Determine cards per page based on screen
  const cardsPerPage = isMobile ? 3 : 6; // 3 cards for mobile, 6 for desktop
  const cardChunks = chunkArray(cards, cardsPerPage);

  return (
    <MKBox component="section" py={3}>
      <MKTypography
        variant="h3"
        color="black"
        align="center"
        sx={{ mb: 3 }}
      >
        Handpicked Travel Experiences Just for You
      </MKTypography>

      <Container>
        <Carousel
          navButtonsAlwaysVisible
          animation="fade"
          autoPlay={false}
          swipe={true}
          indicatorContainerProps={{ style: { marginTop: "10px" } }}
        >
          {cardChunks.map((chunk, idx) => (
            <MKBox
              key={idx}
              display="grid"
              gridTemplateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}
              gridTemplateRows={isMobile ? "repeat(3, 1fr)" : "repeat(2, 1fr)"}
              gap={3}
            >
              {chunk.map((card, i) => (
                <SimpleBookingCard
                  key={i}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  categories={card.categories}
                  action={{
                    type: "internal",
                    route: card.route,
                    color: "info",
                    label: "More Details",
                  }}
                />
              ))}
            </MKBox>
          ))}
        </Carousel>
      </Container>
    </MKBox>
  );
}

export default Places;
