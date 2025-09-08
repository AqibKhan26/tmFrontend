import React, { useRef } from "react";
import { useTheme, useMediaQuery, Container, IconButton } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SimpleBookingCard from "sections/Cards/BookingCards/SimpleBookingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import cards from "data/cardsData";

// helper to split array into chunks
function chunkArray(arr: any[], size: number) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function SwiperPlace() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const swiperRef = useRef<any>(null);

  const cardsPerSlide = isMobile ? 1 : 6;
  const cardChunks = chunkArray(cards, cardsPerSlide);

  return (
    <MKBox component="section" py={3}>
      <MKTypography variant="h3" color="black" align="center" sx={{ mb: 3 }}>
        Handpicked Travel Experiences Just for You
      </MKTypography>

      <Container>
        <div style={{ position: "relative" }}>
          {/* Custom Prev Button */}
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            style={{
              position: "absolute",
              top: "50%",
              left: -20,
              zIndex: 10,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Custom Next Button */}
          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            style={{
              position: "absolute",
              top: "50%",
              right: -20,
              zIndex: 10,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            style={{ paddingBottom: "32px" }}
          >
            {cardChunks.map((chunk, idx) => (
              <SwiperSlide key={idx}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                    gridTemplateRows: isMobile ? "auto" : "repeat(2, auto)",
                    gap: "16px",
                    marginBottom: "32px",
                  }}
                >
                  {chunk.map((card, cIdx) => (
                    <SimpleBookingCard
                      key={cIdx}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </MKBox>
  );
}

export default SwiperPlace;
