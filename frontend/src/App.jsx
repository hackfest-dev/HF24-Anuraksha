import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import OnBoarding from "./pages/OnBoarding";
import Inbox from "./pages/Inbox";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Volunteer from "./pages/Volunteer";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/home'
                    element={<Home />}
                />
                <Route
                    path='/'
                    element={<LogIn />}
                />
                <Route
                    path='/register'
                    element={<Register />}
                />
                <Route
                    path='/onboarding'
                    element={<OnBoarding />}
                />
                <Route
                    path='/inbox'
                    element={<Inbox />}
                />
                <Route
                    path='/about'
                    element={<About />}
                />
                <Route
                    path='/settings'
                    element={<Settings />}
                />
                <Route
                    path='/volunteer'
                    element={<Volunteer />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
