import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LandscapeIcon from "@mui/icons-material/Landscape";

function BaliTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<FlightIcon />}
        iconStyle={{ background: "#1976d2", color: "#fff" }}
      >
        <h3>Arrival in Bali</h3>
        <p>Arrival-In transfers on private basis (Pvt Transfer) – Check in at Kuta.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 1"
        icon={<BeachAccessIcon />}
        iconStyle={{ background: "#ff7043", color: "#fff" }}
      >
        <h3>Kuta Stay</h3>
        <p>Rest and leisure time after check-in.</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<BeachAccessIcon />}
        iconStyle={{ background: "#00897b", color: "#fff" }}
      >
        <h3>Watersports & Uluwatu Temple</h3>
        <p>
          1x Banana Boat, 1x Jetski, 1x Adventure Parasailing. <br />
          Uluwatu Temple visit (Private Basis). (B)
        </p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<DirectionsBoatIcon />}
        iconStyle={{ background: "#0288d1", color: "#fff" }}
      >
        <h3>Nusa Penida Tour</h3>
        <p>
          Shared Boat (West Program: Broken Beach, Angel Billabong, Kelingking Beach). <br />
          Lunch at local restaurant (Indonesian set meal). (B, L)
        </p>
      </VerticalTimelineElement>

      {/* Day 4 */}
      <VerticalTimelineElement
        date="Day 4"
        icon={<LandscapeIcon />}
        iconStyle={{ background: "#6a1b9a", color: "#fff" }}
      >
        <h3>Kintamani Volcano + Ubud Village & Jungle Swing</h3>
        <p>
          Extreme Swing, Libra Swings, Couple Swing, Bird Nest, Lovely Nest, Circle Nest, and more. (B)
        </p>
      </VerticalTimelineElement>

      {/* Day 5 */}
      <VerticalTimelineElement
        date="Day 5"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>Flight out with cherished memories. Guests must arrive at the airport 3 hours before flight.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default BaliTripTimeline;