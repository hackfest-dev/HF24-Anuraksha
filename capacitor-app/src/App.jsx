import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
const App = () => {
    const [notifications, setnotifications] = React.useState([]);

    React.useEffect(() => {
        PushNotifications.checkPermissions().then((res) => {
            if (res.receive !== 'granted') {
                PushNotifications.requestPermissions().then((res) => {
                    if (res.receive === 'denied') {
                        showToast('Push Notification permission denied');
                    }
                    else {
                        showToast('Push Notification permission granted');
                        register();
                    }
                });
            }
            else {
                register();
            }
        });
    }, [])
    const register = () => {
        console.log('Initializing HomePage');

        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();

        // On success, we should be able to receive notifications
        PushNotifications.addListener('registration',
            (token) => {
                showToast('Push registration success');
            }
        );

        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
            (error) => {
                alert('Error on registration: ' + JSON.stringify(error));
            }
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
            (notification) => {
                setnotifications(notifications => [...notifications, { id: notification.id, title: notification.title, body: notification.body, type: 'foreground' }])
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification) => {
                setnotifications(notifications => [...notifications, { id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body, type: 'action' }])
            }
        );
    }

    const showToast = async (msg) => {
        await Toast.show({
            text: msg
        })
    }
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
