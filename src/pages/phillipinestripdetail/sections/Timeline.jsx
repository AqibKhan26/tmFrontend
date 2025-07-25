import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlightIcon from "@mui/icons-material/Flight";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TerrainIcon from "@mui/icons-material/Terrain";
import ChurchIcon from "@mui/icons-material/Church";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";

function PhillipinesTripTimeline() {
  return (
    <VerticalTimeline>
      {/* Day 1 */}
      <VerticalTimelineElement
        date="Day 1"
        icon={<FlightIcon />}
        iconStyle={{ background: "#1976d2", color: "#fff" }}
      >
        <h3>Arrival in Manila</h3>
        <p>
          Meet & greet at Manila Airport. Transfer to hotel and check in.
          Evening free to explore the city at leisure.
        </p>
        <p><strong>Overnight Stay:</strong> Manila</p>
      </VerticalTimelineElement>

      {/* Day 2 */}
      <VerticalTimelineElement
        date="Day 2"
        icon={<LocationCityIcon />}
        iconStyle={{ background: "#388e3c", color: "#fff" }}
      >
        <h3>Manila City Tour (B, L)</h3>
        <p>
          Visit Rizal Park, Intramuros (Walled City), Fort Santiago, San Agustin Church,
          Manila Cathedral, Destileria Limtuaco Museum (wine tasting), and Cultural Center
          of the Philippines.
        </p>
        <p><strong>Lunch:</strong> Indian restaurant | <strong>Overnight Stay:</strong> Manila</p>
      </VerticalTimelineElement>

      {/* Day 3 */}
      <VerticalTimelineElement
        date="Day 3"
        icon={<TerrainIcon />}
        iconStyle={{ background: "#ff7043", color: "#fff" }}
      >
        <h3>Tagaytay Day Tour (B, L)</h3>
        <p>
          Scenic drive to Tagaytay. View the Taal Volcano Crater at the viewing deck.
          Visit People’s Park (Palace in the Sky), Picnic Grove, Gourmet Farm, and
          fruit plantations along the route.
        </p>
        <p><strong>Lunch:</strong> Indian restaurant | <strong>Overnight Stay:</strong> Manila</p>
      </VerticalTimelineElement>

      {/* Day 4 */}
      <VerticalTimelineElement
        date="Day 4"
        icon={<FlightIcon />}
        iconStyle={{ background: "#d32f2f", color: "#fff" }}
      >
        <h3>Departure</h3>
        <p>
          Breakfast at the hotel. Check out and transfer to Manila Airport.
          Flight out with cherished memories. Guests must be at the airport 3 hours before departure.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default PhillipinesTripTimeline;
