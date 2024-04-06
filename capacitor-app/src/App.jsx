import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import OneSignal from 'onesignal-cordova-plugin';
const ONE_SIGNAL_APP_ID = "afe1d7d8-4279-4361-80de-becadab65f14"

const App = () => {
    OneSignal.Debug.setLogLevel(6)

    OneSignal.initialize(ONE_SIGNAL_APP_ID);

    OneSignal.Notifications.addEventListener('click', async (e) => {
        let clickData = await e.notification;
        console.log("Notification Clicked : " + clickData);
    })

    OneSignal.Notifications.requestPermission(true).then((success) => {
        console.log("Notification permission granted " + success);
    })
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/login'
                    element={<LogIn />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
