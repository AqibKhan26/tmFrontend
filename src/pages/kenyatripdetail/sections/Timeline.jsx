import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import SafariIcon from "@mui/icons-material/Pets";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LandscapeIcon from "@mui/icons-material/Landscape";

function KenyaTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<FlightIcon />}
        iconStyle={{ background: "#1976d2", color: "#fff" }}
      >
        <h3>Arrival in Nairobi - Transfer to Amboseli</h3>
        <p>
          Pickup from Jomo Kenyatta International Airport [NBO] and transfer to Amboseli Serena Safari Lodge.
        </p>
        <p>
          Amboseli National Park is renowned for large herds of elephants, Maasai giraffe, lions, cheetahs,
          and spectacular views of Mount Kilimanjaro. The park also offers excellent birding, especially
          near swamps and lakes.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 1"
        icon={<HotelIcon />}
        iconStyle={{ background: "#388e3c", color: "#fff" }}
      >
        <h3>Overnight Stay - Amboseli Serena Safari Lodge</h3>
        <p>Full Board (Breakfast, Lunch & Dinner)</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<SafariIcon />}
        iconStyle={{ background: "#6a1b9a", color: "#fff" }}
      >
        <h3>Game Drives in Amboseli National Park</h3>
        <p>
          Enjoy morning and afternoon game drives across the open plains with Mount Kilimanjaro as a
          backdrop. Opportunity to meet the Maasai people and experience their culture.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 2"
        icon={<HotelIcon />}
        iconStyle={{ background: "#388e3c", color: "#fff" }}
      >
        <h3>Overnight Stay - Amboseli Serena Safari Lodge</h3>
        <p>Full Board (Breakfast, Lunch & Dinner)</p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<DirectionsCarIcon />}
        iconStyle={{ background: "#ff8f00", color: "#fff" }}
      >
        <h3>Return to Nairobi</h3>
        <p>
          Breakfast at leisure. Drive back to Nairobi. Lunch on own account. Transfer to Jomo Kenyatta
          International Airport [NBO].
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 3"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>
          Flight out with cherished memories. Guests must be at the airport 3 hours before the flight.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default KenyaTripTimeline;
