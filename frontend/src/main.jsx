import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import i18n from "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <i18next.Provider i18n={i18n}>
            <App />
        </i18next.Provider>
    </React.StrictMode>
);
