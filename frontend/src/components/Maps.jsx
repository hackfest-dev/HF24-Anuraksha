import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
    const [map, setMap] = useState(null);
    const [center, setCenter] = useState({ lat: 0, lng: 0 });

    // Function to get the device's current location
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => {
                    // Handle errors
                    console.error("Error getting the location");
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        getLocation();
    }, []); // Run only once on component mount

    return (
        <div style={{ height: "550px", width: "100%" }}>
            <LoadScript googleMapsApiKey='AIzaSyA3yNeTNL2GooUf0GKMkioJmG7QYa1HKDE'>
                <GoogleMap
                    mapContainerStyle={{ height: "100%", width: "100%" }}
                    center={center}
                    zoom={15}
                    onLoad={(map) => setMap(map)}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
