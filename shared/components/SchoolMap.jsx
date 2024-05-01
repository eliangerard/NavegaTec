import { useState } from 'react';

import { Map, Marker, ZoomControl } from 'pigeon-maps';
import buildings from '../data/buildings';
import getMapStyle from '../helpers/getMapStyle';
import { Icon } from '../ui/icons/Icon';
import { BuildingInfo } from '../components/BuildingInfo';

export const SchoolMap = () => {

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
    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const [center, setCenter] = useState([28.7080764, -106.1064929])
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

    return (
        <>
            <BuildingInfo id={selectedBuilding} show={showPopup} setShow={setShowPopup} />
            <Map
                provider={styles[style]}
                defaultCenter={center}
                defaultZoom={17}
                minZoom={17}
                maxZoom={20}
                zoomSnap={false}
                onBoundsChanged={({ center, zoom, bounds, initial }) => {
                    if (!initial) {
                        console.log(bounds);
                        if (bounds.sw[0] < mapBounds.sw[0]) {
                            bounds.sw[0] = mapBounds.sw[0];
                        }
                        if (bounds.sw[1] < mapBounds.sw[1]) {
                            bounds.sw[1] = mapBounds.sw[1];
                        }
                        if (bounds.ne[0] > mapBounds.ne[0]) {
                            bounds.ne[0] = mapBounds.ne[0];
                        }
                        if (bounds.ne[1] > mapBounds.ne[1]) {
                            bounds.ne[1] = mapBounds.ne[1];
                        }
                    }
                }}
            >
                {
                    buildings.map((building, i) => (
                        <Marker
                            style={{ pointerEvents: 'auto' }}
                            id={building.id}
                            key={i}
                            width={50}
                            // longitude={building.lng}
                            // latitude={building.lat}
                            anchor={[building.lat, building.lng]}
                            onClick={() => handlePopup(building.id)}
                        >
                            <Icon building={building}

                            // style={{ transform: `scale(${zoom <= 17 ? (1 * Math.pow((zoom / 17), 6)) : 1})` }}
                            />
                        </Marker>
                    ))
                }
                <Marker
                    anchor={mapBounds.sw}
                    color='red'
                />
                <Marker
                    anchor={mapBounds.ne}
                    color='green'
                />
                <ZoomControl />
                <div className='absolute bottom-4 left-4 border-2 border-zinc-300 bg-white rounded-lg h-10 flex justify-around w-32 items-center'>
                    <button onClick={() => setStyle((style - 1 + styles.length) % styles.length)} className='w-8'
                    >{'<'}</button>
                    <p className='w-8 text-center'>{style}</p>
                    <button className='w-8'
                        onClick={() => setStyle((style + 1) % styles.length)}
                    >{'>'}</button>
                </div>
            </Map >
        </>
    )
}
