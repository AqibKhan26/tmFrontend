import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import KayakingIcon from "@mui/icons-material/Kayaking"; // If using MUI v6, else use SportsKabaddiIcon for water sports.

function LakshadweepTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<FlightIcon />}
        iconStyle={{ background: "#1976d2", color: "#fff" }}
      >
        <h3>Arrival at Agatti</h3>
        <p>
          Meet & greet at Agatti Airport. Transfer to the resort (20 mins). Welcome drink on arrival.
          Relax at the beach and enjoy the serene surroundings.
        </p>
        <p><strong>Overnight Stay:</strong> Agatti</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<DirectionsBoatIcon />}
        iconStyle={{ background: "#0288d1", color: "#fff" }}
      >
        <h3>Agatti to Kalpitti Island</h3>
        <p>
          After 4:30 PM, proceed by small boat to Kalpitti Island (weather-dependent). Enjoy swimming,
          sightseeing, and a tranquil island walk before returning to Agatti at sunset.
        </p>
        <p><strong>Overnight Stay:</strong> Agatti</p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<BeachAccessIcon />}
        iconStyle={{ background: "#ff7043", color: "#fff" }}
      >
        <h3>Leisure Day / Water Sports</h3>
        <p>
          Enjoy a free day at leisure or opt for thrilling water sports (direct payment). Activities include
          snorkeling, diving, kayaking, fishing, and reef watching.
        </p>
        <p><strong>Overnight Stay:</strong> Agatti</p>
      </VerticalTimelineElement>

      {/* Day 4 */}
      <VerticalTimelineElement
        date="Day 4"
        icon={<HotelIcon />}
        iconStyle={{ background: "#388e3c", color: "#fff" }}
      >
        <h3>Island Relaxation</h3>
        <p>
          Spend the day soaking in the beauty of Agatti’s beaches, exploring coral reefs, or simply
          unwinding at your beachfront villa.
        </p>
        <p><strong>Overnight Stay:</strong> Agatti</p>
      </VerticalTimelineElement>

      {/* Day 5 */}
      <VerticalTimelineElement
        date="Day 5"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>
          After breakfast, transfer to Agatti Airport. Flight out with cherished memories. Guests must
          be at the airport 3 hours before departure.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default LakshadweepTripTimeline;
