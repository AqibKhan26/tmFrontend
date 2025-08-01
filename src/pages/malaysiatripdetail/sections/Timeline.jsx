import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";
import TerrainIcon from "@mui/icons-material/Terrain";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HotelIcon from "@mui/icons-material/Hotel";

function MalaysiaTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<FlightIcon />}
        iconStyle={{ background: "#1976d2", color: "#fff" }}
      >
        <h3>Arrival in Kuala Lumpur</h3>
        <p>
          Arrive at Kuala Lumpur International Airport and transfer to your hotel. Evening at
          leisure to explore the vibrant city on your own.
        </p>
        <p><strong>Overnight Stay:</strong> Kuala Lumpur</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<TerrainIcon />}
        iconStyle={{ background: "#388e3c", color: "#fff" }}
      >
        <h3>Full Day Genting Highlands Tour</h3>
        <p>
          Take a scenic drive to Genting Highlands. Enjoy indoor & outdoor theme parks,
          shopping, restaurants, and more. Enroute, make a quick 20-min photo stop at Batu Caves.
          Includes one-way cable car ride (subject to weather/maintenance).
        </p>
        <p><strong>Overnight Stay:</strong> Kuala Lumpur</p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<LocationCityIcon />}
        iconStyle={{ background: "#0288d1", color: "#fff" }}
      >
        <h3>Kuala Lumpur City Tour & KL Tower</h3>
        <p>
          Half-day city tour covering Kuala Lumpur’s iconic landmarks. Visit KL Tower
          Observation Deck (entry ticket included) for stunning 276m-high views of the city.
          Explore Putrajaya en route (30-min photo stop) depending on flight timings.
        </p>
        <p><strong>Overnight Stay:</strong> Kuala Lumpur</p>
      </VerticalTimelineElement>

      {/* Day 4 */}
      <VerticalTimelineElement
        date="Day 4"
        icon={<HotelIcon />}
        iconStyle={{ background: "#ff7043", color: "#fff" }}
      >
        <h3>Free Day / Optional Tours</h3>
        <p>
          Enjoy a leisure day in Kuala Lumpur. Take optional tours or explore shopping,
          local cuisine, and cultural spots at your own pace.
        </p>
        <p><strong>Overnight Stay:</strong> Kuala Lumpur</p>
      </VerticalTimelineElement>

      {/* Day 5 */}
      <VerticalTimelineElement
        date="Day 5"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>
          Check out and transfer to Kuala Lumpur Airport. Flight out with cherished memories.
          Guests must be at the airport 3 hours before the flight.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default MalaysiaTripTimeline;
