import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AttractionsIcon from "@mui/icons-material/Attractions";
import ParkIcon from "@mui/icons-material/Park";
import HotelIcon from "@mui/icons-material/Hotel";
import NightlifeIcon from "@mui/icons-material/Nightlife";

function SingaporeTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<NightlifeIcon />}
        iconStyle={{ background: "#6a1b9a", color: "#fff" }}
      >
        <h3>Arrival in Singapore & Night Safari</h3>
        <p>
          Arrive at Singapore Airport and transfer to hotel. In the evening, experience the world’s first Night Safari and see nocturnal wildlife in a natural setting.
        </p>
        <p><strong>Overnight Stay:</strong> Singapore</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<LocationCityIcon />}
        iconStyle={{ background: "#1976d2", color: "#fff" }}
      >
        <h3>Panoramic City Drive & Sentosa Island</h3>
        <p>
          Morning panoramic city drive (2.5 hrs SIC) covering Merlion Park, Marina Bay Sands, Gardens by the Bay,
          Chinatown, Little India, Kampong Glam, and colonial landmarks.
        </p>
        <p>
          Afternoon/evening Sentosa Island adventure with Singapore Cable Car ride, SkyHelix Sentosa, and the Wings of Time night show.
        </p>
        <p><strong>Overnight Stay:</strong> Singapore</p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<AttractionsIcon />}
        iconStyle={{ background: "#ff7043", color: "#fff" }}
      >
        <h3>Universal Studios Singapore</h3>
        <p>
          Full day at Universal Studios Singapore. Enjoy 28 rides, shows, and attractions across seven themed zones. Perfect for all ages.
        </p>
        <p><strong>Overnight Stay:</strong> Singapore</p>
      </VerticalTimelineElement>

      {/* Day 4 */}
      <VerticalTimelineElement
        date="Day 4"
        icon={<HotelIcon />}
        iconStyle={{ background: "#388e3c", color: "#fff" }}
      >
        <h3>Free Day / Optional Activities</h3>
        <p>
          Explore Singapore at your own pace. Shop along Orchard Road, visit Gardens by the Bay, or take an optional cultural tour.
        </p>
        <p><strong>Overnight Stay:</strong> Singapore</p>
      </VerticalTimelineElement>

      {/* Day 5 */}
      <VerticalTimelineElement
        date="Day 5"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>
          Breakfast at the hotel. Check out and transfer to Singapore Airport. Flight out with cherished memories.
          Guests must be at the airport 3 hours before departure.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default SingaporeTripTimeline;