import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

function DubaiTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<LandscapeIcon />}
        iconStyle={{ background: "#ff9800", color: "#fff" }}
      >
        <h3>Standard Desert Safari</h3>
        <p>
          Experience thrilling dune bashing, camel riding, sandboarding, and a taste of Arabian
          culture with traditional entertainment and dining in the desert.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 1"
        icon={<CameraAltIcon />}
        iconStyle={{ background: "#0288d1", color: "#fff" }}
      >
        <h3>Dubai Frame</h3>
        <p>
          Visit the iconic 150m high Dubai Frame, offering panoramic views of Old and New Dubai, blending the city’s past and future.
        </p>
      </VerticalTimelineElement>

      {/* Departure */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>
          Transfer to Dubai Airport for your flight back home. Guests must arrive at the airport 3 hours before the flight.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default DubaiTripTimeline;
