import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FlightIcon from '@mui/icons-material/Flight';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import tigerPhotos from "assets/images/thailand/tigerPhotos.jpg";
import coralIsland from "assets/images/thailand/coralIsland.jpg";
import floatingMarket from "assets/images/thailand/floatingMarket.jpg";
import bangkokCity from "assets/images/thailand/bangkokCity.jpg";

const ThailandTripTimeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                date="Day 1"
                icon={<FlightIcon />}
                iconStyle={{ background: '#56d4bf', color: '#fff' }}
            >
                <h3>Arrival + Tiger Topia</h3>
                <p>Breakfast at Tiger Topia</p>
                <p>Photoshoot with Tiger</p>
                <p>Visit Gems Gallery</p>
                <p>Lunch</p>
                <p>Visit Alcazar Show</p>
                <p>Dinner</p>
                <img
                    src={tigerPhotos} // Replace with an actual image URL
                    alt="Tiger Photos"
                    style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
                />
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 2"
                icon={<BeachAccessIcon />}
                iconStyle={{ background: '#56d4bf', color: '#fff' }}
            >
                <h3>Coral Island</h3>
                <p>Island trip with lunch (Activities Direct Payment)</p>
                <p>Visit Pattaya Big Buddha & View Point</p>
                <p>Dinner</p>
                <img
                    src={coralIsland} // Replace with an actual image URL
                    alt="Coral Island"
                    style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
                />
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 3"
                icon={<DirectionsCarIcon />}
                iconStyle={{ background: '#56d4bf', color: '#fff' }}
            >
                <h3>PTY to BKK</h3>
                <p>Transfer to Bangkok</p>
                <p>Visit Floating Market & Row Boating</p>
                <p>Lunch</p>
                <p>Dinner</p>
                <img
                    src={floatingMarket} // Replace with an actual image URL
                    alt="Floating Market"
                    style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
                />
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 4"
                icon={<PetsIcon />}
                iconStyle={{ background: '#56d4bf', color: '#fff' }}
            >
                <h3>Safari World & Marine Park</h3>
                <p>Full-day trip including lunch</p>
                <p>Dinner</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="Day 5"
                icon={<TempleBuddhistIcon />}
                iconStyle={{ background: '#56d4bf', color: '#fff' }}
            >
                <h3>Bangkok City Tour</h3>
                <p>Visit Golden Buddha & Mini Reclining Buddha</p>
                <p>Lunch</p>
                <p>Departure</p>
                <img
                    src={bangkokCity} // Replace with an actual image URL
                    alt="Bangkok City"
                    style={{ width: '100%', borderRadius: '12px', marginTop: '10px' }}
                />
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default ThailandTripTimeline;
