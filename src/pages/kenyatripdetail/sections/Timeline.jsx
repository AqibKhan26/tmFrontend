import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NatureIcon from '@mui/icons-material/Nature';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SafariIcon from '@mui/icons-material/Pets';

import argyleHotel from "assets/images/kenya/argyleHotel.jpg";
import cliffHotel from "assets/images/kenya/theCliffHotel.jpg";
import ashnilCamp from "assets/images/kenya/ashnilCamp.jpg";


const KenyaTripTimeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                date="Day 1"
                icon={<FlightIcon />}
                iconStyle={{ background: '#1976d2', color: '#fff' }}
            >
                <h3>Arrival in Nairobi</h3>
                <p>Meet representative and transfer to Argyle Grand Hotel.</p>
                <p>Rest of the day at leisure.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 1"
                icon={<HotelIcon />}
                iconStyle={{ background: '#388e3c', color: '#fff' }}
            >
                <h3>Overnight: Argyle Grand Hotel, Nairobi</h3>
                <p>Bed & Breakfast</p>
                <img
                    src={argyleHotel} // Replace with an actual image URL
                    alt="Argyle Grand Hotel"
                    style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
                />
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 2"
                icon={<DirectionsCarIcon />}
                iconStyle={{ background: '#ff8f00', color: '#fff' }}
            >
                <h3>Drive to Nakuru</h3>
                <p>Arrive for lunch and enjoy an afternoon game drive.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 2"
                icon={<HotelIcon />}
                iconStyle={{ background: '#388e3c', color: '#fff' }}
            >
                <h3>Overnight: The Cliff, Nakuru</h3>
                <p>Full Board</p>
                <img
                    src={cliffHotel} // Replace with an actual image URL
                    alt="The Cliff, Nakuru"
                    style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
                />
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 3"
                icon={<SafariIcon />}
                iconStyle={{ background: '#6a1b9a', color: '#fff' }}
            >
                <h3>Full Day Safari - Nakuru</h3>
                <p>Morning and afternoon game drives.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 4"
                icon={<DirectionsCarIcon />}
                iconStyle={{ background: '#ff8f00', color: '#fff' }}
            >
                <h3>Drive to Masai Mara</h3>
                <p>Arrive for lunch followed by an afternoon game drive.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 4"
                icon={<HotelIcon />}
                iconStyle={{ background: '#388e3c', color: '#fff' }}
            >
                <h3>Overnight: Ashnil Mara Camp</h3>
                <p>Full Board</p>
                <img
                    src={ashnilCamp} // Replace with an actual image URL
                    alt="Ashnil Mara Camp"
                    style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
                />
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 5"
                icon={<SafariIcon />}
                iconStyle={{ background: '#6a1b9a', color: '#fff' }}
            >
                <h3>Game Drives - Masai Mara</h3>
                <p>Morning and afternoon game drives.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 6"
                icon={<SafariIcon />}
                iconStyle={{ background: '#6a1b9a', color: '#fff' }}
            >
                <h3>Game Drives - Masai Mara</h3>
                <p>Morning and afternoon game drives.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 7"
                icon={<DirectionsCarIcon />}
                iconStyle={{ background: '#ff8f00', color: '#fff' }}
            >
                <h3>Drive to Nairobi</h3>
                <p>Return to Argyle Grand Hotel. Afternoon at leisure.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 8"
                icon={<HotelIcon />}
                iconStyle={{ background: '#388e3c', color: '#fff' }}
            >
                <h3>Overnight: Argyle Grand Hotel, Nairobi</h3>
                <p>Bed & Breakfast</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 9"
                icon={<FlightIcon />}
                iconStyle={{ background: '#1976d2', color: '#fff' }}
            >
                <h3>Departure Day</h3>
                <p>Breakfast at leisure and transfer to Jomo Kenyatta Airport.</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default KenyaTripTimeline;
