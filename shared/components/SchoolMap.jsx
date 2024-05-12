import { useState } from 'react';

import { Map, Marker, ZoomControl } from 'pigeon-maps';
import buildings from '../data/buildings';
import { Icon } from '../ui/icons/Icon';
import { BuildingInfo } from '../components/BuildingInfo';
import { Link } from 'react-router-dom';
import { EventInfo } from './EventInfo';


export const SchoolMap = ({ children, disabled, events = [], moving }) => {

    const mapBounds = {
        sw: [
            28.703281609042378,
            -106.11266759471128,
        ],
        ne: [
            28.716028764094105,
            -106.096553034047,
        ]
    };
    const [showPopup, setShowPopup] = useState(false);
    const [showEvent, setShowEvent] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [center, setCenter] = useState([28.7080764, -106.1064929])


    const [location, setLocation] = useState(null)
    const [style, setStyle] = useState(0);
    const styles = [
        (x, y, z) => { return `https://b.basemaps.cartocdn.com/rastertiles/voyager_nolabels/${z}/${x}/${y}.png` },
        (x, y, z) => { return `https://b.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png` },
        (x, y, z) => { return `https://b.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png` },
        (x, y, z) => { return `https://b.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png` },
        (x, y, z) => { return `https://tile.openstreetmap.org/${z}/${x}/${y}.png` },
        (x, y, z) => { return `https://tile.openstreetmap.fr/hot/${z}/${x}/${y}.png` },
    ];

    const handlePopup = (id) => {
        setSelectedBuilding(id);
        setShowPopup((show) => !show);
    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                if (latitude < mapBounds.sw[0] || latitude > mapBounds.ne[0] || longitude < mapBounds.sw[1] || longitude > mapBounds.ne[1]) {
                    console.error("Location out of bounds");
                    return;
                }

                setCenter([latitude, longitude]);
                setLocation([latitude, longitude]);
                console.log(latitude, longitude);
                setInterval(() => {
                    handleLocation();
                }, 5000);
            }, (error) => {
                console.error(error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    return (
        <>
            <EventInfo id={selectedEvent} show={showEvent} setShow={setShowEvent} />
            <BuildingInfo id={selectedBuilding} show={showPopup} setShow={setShowPopup} />
            <div className="w-full h-full overflow-hidden">
                <Map
                    provider={styles[style]}
                    defaultCenter={center}
                    center={center}
                    defaultZoom={17}
                    minZoom={17}
                    maxZoom={20}
                    zoomSnap={false}
                    limitBounds='edge'
                    onBoundsChanged={({ center }) => {
                        setCenter(() => {
                            const newCenter = center;
                            if (newCenter[0] < mapBounds.sw[0]) newCenter[0] = mapBounds.sw[0];
                            if (newCenter[0] > mapBounds.ne[0]) newCenter[0] = mapBounds.ne[0];
                            if (newCenter[1] < mapBounds.sw[1]) newCenter[1] = mapBounds.sw[1];
                            if (newCenter[1] > mapBounds.ne[1]) newCenter[1] = mapBounds.ne[1];
                            return newCenter;
                        }
                        )
                    }}
                >
                    {children}
                    {
                        buildings.map((building, i) => (
                            <Marker
                                style={{ pointerEvents: disabled ? 'none' : 'auto', filter: disabled ? 'grayscale(1)' : '' }}
                                key={i}
                                width={50}
                                // longitude={building.lng}
                                // latitude={building.lat}
                                anchor={[building.lat, building.lng]}
                                onClick={() => {
                                    if (disabled) return;
                                    handlePopup(building.id)
                                }}
                            >
                                <div className="relative">
                                    <div className="absolute translate-y-1/2 min-w-12">
                                        <Icon building={building}
                                        // style={{ transform: `scale(${zoom <= 17 ? (1 * Math.pow((zoom / 17), 6)) : 1})` }}
                                        />
                                    </div>
                                </div>
                            </Marker>
                        ))
                    }
                    {
                        events.length > 0 && events.filter(event => typeof event.where === 'number').map((event, i) => (
                            <Marker
                                style={{ pointerEvents: disabled ? 'none' : 'auto', filter: disabled ? 'grayscale(1)' : '' }}
                                key={i}
                                width={50}
                                anchor={event.anchor}
                                onClick={() => {
                                    setSelectedEvent(event._id);
                                    setShowEvent(true);
                                }}
                            >
                                <div className="relative">
                                    <div className="absolute translate-y-1/2 min-w-12">
                                        <Icon building={event.where} />
                                    </div>
                                </div>
                            </Marker>
                        ))
                    }
                    <Marker
                        anchor={mapBounds.sw}
                        color='red'
                    />
                    {
                        location && <Marker
                            anchor={location}
                            color='blue'
                        >
                            <div className='bg-blue-400 border-2 border-black nt-shadow rounded-full h-4 w-4'></div>
                        </Marker>
                    }
                    <Link to="/events" className='absolute right-0 w-12 m-4'>
                        <img src="/annIcon.svg" alt="" />
                    </Link>
                    <ZoomControl />
                    <div className='absolute bottom-4 left-4 border-2 border-zinc-300 bg-white rounded-lg h-10 flex justify-around w-32 items-center'>
                        <button onClick={() => setStyle((style - 1 + styles.length) % styles.length)} className='w-8'
                        >{'<'}</button>
                        <p className='w-8 text-center'>{style}</p>
                        <button className='w-8'
                            onClick={() => setStyle((style + 1) % styles.length)}
                        >{'>'}</button>
                        <button onClick={handleLocation}>Ubi</button>
                    </div>
                </Map >
            </div>
        </>
    )
}
