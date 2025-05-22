import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NatureIcon from '@mui/icons-material/Nature';

import hanoiCity from "assets/images/vietnam/hanoiCity.jpg";
import ninhBinhProvince from "assets/images/vietnam/ninhBinhProvince.jpg";
import halongBayCruise from "assets/images/vietnam/halongBayCruise.jpg";
import hoChiMinhCity from "assets/images/vietnam/hoChiMinhCity.jpg";

const VietnamTripTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="Day 1: Hanoi – City Tour"
        icon={<FlightIcon />}
        iconStyle={{ background: '#1976d2', color: '#fff' }}
      >
        <h3>Arrival in Hanoi</h3>
        <p>Transfer to city center, check-in at 14:00.</p>
        <p>Visit Hanoi Old Quarter, Ho Chi Minh Mausoleum, Stilt House, One Pillar Pagoda, Temple of Literature, and Hoan Kiem Lake.</p>
        <p>Overnight in Hanoi.</p>
        <img
          src={hanoiCity} // Replace with an actual image URL
          alt="Hanoi City"
          style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
        />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 2: Hanoi – Hoa Lu – Mua Cave – Trang An"
        icon={<NatureIcon />}
        iconStyle={{ background: '#4caf50', color: '#fff' }}
      >
        <h3>Day Trip to Ninh Binh Province</h3>
        <p>Visit Hoa Lu Citadel and ancient temples.</p>
        <p>Rowboat tour through Trang An caves and temples.</p>
        <p>Hike Mua Cave for panoramic views.</p>
        <p>Return and overnight in Hanoi.</p>
        <img
          src={ninhBinhProvince} // Replace with an actual image URL
          alt="Ninh Binh Province"
          style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
        />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 3: Hanoi – Halong Bay"
        icon={<DirectionsCarIcon />}
        iconStyle={{ background: '#ff9800', color: '#fff' }}
      >
        <h3>Transfer to Halong Bay</h3>
        <p>Board cruise, explore bay, visit caves and floating villages.</p>
        <p>Seafood lunch, dinner and overnight on the boat.</p>
        <img
          src={halongBayCruise} // Replace with an actual image URL
          alt="Halong Bay Cruise"
          style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
        />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 4: Halong – Hanoi – Ho Chi Minh"
        icon={<FlightIcon />}
        iconStyle={{ background: '#1976d2', color: '#fff' }}
      >
        <h3>Morning Cruise and Flight</h3>
        <p>Breakfast and cruise through Halong Bay.</p>
        <p>Visit Surprise Cave, brunch on board.</p>
        <p>Return to Hanoi, then fly to Ho Chi Minh City.</p>
        <p>Check-in and overnight in Ho Chi Minh.</p>
        <img
          src={hoChiMinhCity} // Replace with an actual image URL
          alt="Ho Chi Minh City"
          style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
        />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 5: Departure from Ho Chi Minh"
        icon={<FlightIcon />}
        iconStyle={{ background: '#9c27b0', color: '#fff' }}
      >
        <h3>Departure</h3>
        <p>Breakfast and private transfer to airport for departure.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VietnamTripTimeline;