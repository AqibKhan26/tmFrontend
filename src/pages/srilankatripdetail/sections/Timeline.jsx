import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import NatureIcon from "@mui/icons-material/Nature";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HotelIcon from "@mui/icons-material/Hotel";

function SriLankaTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<NatureIcon />}
        iconStyle={{ background: "#4caf50", color: "#fff" }}
      >
        <h3>Arrival at Colombo • Transfer to Kandy</h3>
        <p>Arrive at Bandaranaike International Airport and proceed to Kandy.</p>
        <p>
          Visit <strong>Pinnawala Elephant Orphanage</strong>, Gem Museum, and enjoy the vibrant Kandy Cultural Show.
        </p>
        <p><strong>Overnight Stay:</strong> Kandy - Swiss Residence</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<TempleBuddhistIcon />}
        iconStyle={{ background: "#ff9800", color: "#fff" }}
      >
        <h3>Kandy to Nuwara Eliya</h3>
        <p>
          Morning visit to the <strong>Temple of the Sacred Tooth Relic</strong>. 
          Proceed to Nuwara Eliya, exploring tea plantations, Ramboda Falls, Gregory Lake, Sri Baktha Hanuman Temple, and Seetha Amman Temple.
        </p>
        <p><strong>Overnight Stay:</strong> Nuwara Eliya - Ashford Hotel</p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<BeachAccessIcon />}
        iconStyle={{ background: "#2196f3", color: "#fff" }}
      >
        <h3>Nuwara Eliya to Bentota</h3>
        <p>
          Drive to Bentota and relax at golden beaches. Visit <strong>Kosgoda Turtle Hatchery</strong> and enjoy water sports at Bentota River.
        </p>
        <p><strong>Overnight Stay:</strong> Bentota - Club Bentota</p>
      </VerticalTimelineElement>

      {/* Day 4 */}
      <VerticalTimelineElement
        date="Day 4"
        icon={<NatureIcon />}
        iconStyle={{ background: "#8bc34a", color: "#fff" }}
      >
        <h3>Bentota to Colombo</h3>
        <p>
          Experience a <strong>Madu River Boat Safari</strong> en route to Colombo. Arrive and explore the city.
        </p>
        <p><strong>Overnight Stay:</strong> Colombo - Berjaya Hotel</p>
      </VerticalTimelineElement>

      {/* Day 5 */}
      <VerticalTimelineElement
        date="Day 5"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Colombo City Tour & Departure</h3>
        <p>
          Visit <strong>Red Mosque</strong>, <strong>Lotus Tower</strong>, and <strong>Colombo National Museum</strong>. 
          Transfer to Bandaranaike International Airport for departure.
        </p>
        <p><strong>Guests must be at the airport 3 hours before the flight.</strong></p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default SriLankaTripTimeline;
