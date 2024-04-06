import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <i18n.Provider value={i18n}>
            <App />
        </i18n.Provider>
    </React.StrictMode>
);
