import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import OnBoarding from "./pages/OnBoarding";

const App = () => {
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
                <Route
                    path='/register'
                    element={<Register />}
                />
                <Route
                    path='/:uId/onboarding'
                    element={<OnBoarding />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
