import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LandscapeIcon from "@mui/icons-material/Landscape";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HotelIcon from "@mui/icons-material/Hotel";

function BhutanTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<FlightIcon />}
        iconStyle={{ background: "#1976d2", color: "#fff" }}
      >
        <h3>Arrival at Paro Airport - Transfer to Thimphu</h3>
        <p>
          Meet driver & guide at Paro Airport and transfer to Thimphu, the capital city of Bhutan. Check-in at the hotel.
        </p>
        <p>
          If arriving in the first half, optional visits to Buddha Dordenma and Tashicho Dzong can be arranged. Evening at leisure.
        </p>
        <p><strong>Overnight Stay:</strong> Thimphu</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<TempleBuddhistIcon />}
        iconStyle={{ background: "#6a1b9a", color: "#fff" }}
      >
        <h3>Thimphu Sightseeing</h3>
        <p>
          Visit Kuensel Phodrang (Buddha Statue), Hindu Temple, National Memorial Chorten (outer view),
          and Wagdi Tse Lhakhanag (short 40 min hike).
        </p>
        <p>
          Afternoon: Nunnery, BBS Tower, National Library, Centenary Farmer Market. Explore Craft Bazaar for shopping.
        </p>
        <p><strong>Overnight Stay:</strong> Thimphu</p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<DirectionsCarIcon />}
        iconStyle={{ background: "#0288d1", color: "#fff" }}
      >
        <h3>Transfer to Paro - Sightseeing</h3>
        <p>
          Drive to Paro (Approx. 55km / 1.5 hrs). En route, visit riverside spots and Bonday Zangthophelri.
        </p>
        <p>
          Sightseeing: Airport View, Ta Dzong (National Museum), Rinpung Dzong (outer view).
          Evening at leisure. <strong>Overnight Stay:</strong> Paro
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 3"
        icon={<LandscapeIcon />}
        iconStyle={{ background: "#388e3c", color: "#fff" }}
      >
        <h3>Optional Excursions</h3>
        <ul>
          <li>
            <strong>Taktsang Monastery (Tiger’s Nest):</strong> Iconic hike with views of the monastery
            perched on a cliff. Optional Kichu Lakhang visit on return.
          </li>
          <li>
            <strong>Paro City Tour:</strong> Visit Sangchen Chokor Monastery, Ta Dzong, Drukgyal Dzong,
            Rinpung Dzong, Kichu Lakhang (time-dependent).
          </li>
          <li>
            <strong>Chele La Pass:</strong> Scenic drive to the highest motorable pass in Bhutan. Stunning
            Himalayan views, prayer flags, and Kila Goemba hike.
          </li>
        </ul>
        <p>
          Optional: Farmhouse Dinner, Hot Stone Bath, Excursion to Haa Valley (extra charges apply).
        </p>
      </VerticalTimelineElement>

      {/* Day 4 */}
      <VerticalTimelineElement
        date="Day 4"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>
          Flight out from Paro with cherished memories. Guests are advised to reach the airport 3 hours before departure.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default BhutanTripTimeline;
