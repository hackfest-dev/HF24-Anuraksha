import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// Replace with your actual Google Maps API key
const API_KEY = "AIzaSyA3yNeTNL2GooUf0GKMkioJmG7QYa1HKDE";

const libraries = ["places"];

const mapContainerStyle = {
    width: "100%", // Adjust as needed
    height: "100%", // Adjust as needed
};

const Maps = () => {
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        // Get current location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                console.error("Error getting current location:", error);
            }
        );
    }, []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyA3yNeTNL2GooUf0GKMkioJmG7QYa1HKDE",
        libraries,
        loadingElement: <div>Loading...</div>, // Show a loading message
    });

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={currentLocation || { lat: 0, lng: 0 }} // Default to a general area if location is unavailable
        >
            {currentLocation && (
                <Marker
                    position={currentLocation}
                    icon={{
                        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                        scaledSize: new window.google.maps.Size(50, 50), // Adjust as needed
                    }}
                />
            )}
        </GoogleMap>
    );
};

export default Maps;
