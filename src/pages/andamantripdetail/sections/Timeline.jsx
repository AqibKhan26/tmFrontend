import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import HotelIcon from "@mui/icons-material/Hotel";

function AndamanTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<FlightIcon />}
        iconStyle={{ background: "#1976d2", color: "#fff" }}
      >
        <h3>Arrival in Port Blair</h3>
        <p>Pickup at Veer Savarkar International Airport and transfer to hotel. Check-in and leisure time.</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<HistoryEduIcon />}
        iconStyle={{ background: "#6d4c41", color: "#fff" }}
      >
        <h3>Cellular Jail & Light & Sound Show</h3>
        <p>
          Afternoon visit to the historic Cellular Jail (National Memorial). Witness the moving Light & Sound show in the evening.
        </p>
        <ul>
          <li>Guests walk ~200m from parking to Jail.</li>
          <li>Free time at Veer Savarkar Park before the show.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 2"
        icon={<HotelIcon />}
        iconStyle={{ background: "#388e3c", color: "#fff" }}
      >
        <h3>Overnight Stay - Port Blair</h3>
        <p>Stay at Port Blair hotel.</p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<DirectionsBoatIcon />}
        iconStyle={{ background: "#0288d1", color: "#fff" }}
      >
        <h3>Havelock - Elephant Beach</h3>
        <p>
          Morning speedboat trip to Elephant Beach. Enjoy water sports: Snorkeling, Sea Walk, Parasailing, Banana Boat,
          Semi-Submarine (Scuba not available here).
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 3"
        icon={<BeachAccessIcon />}
        iconStyle={{ background: "#ff7043", color: "#fff" }}
      >
        <h3>Kalapathar Beach</h3>
        <p>
          Afternoon visit to Kalapathar Beach, famous for scenic photography and pristine shoreline.
        </p>
      </VerticalTimelineElement>

      {/* Day 5 */}
      <VerticalTimelineElement
        date="Day 5"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>
          Transfer to Port Blair Airport for your flight back home. Guests must arrive at the airport 3 hours before the flight.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default AndamanTripTimeline;
