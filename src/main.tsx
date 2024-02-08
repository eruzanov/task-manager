import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { SatusesProvider } from "./features/statuses/StatusesProvider";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SatusesProvider>
            <RouterProvider router={router} />
        </SatusesProvider>
    </React.StrictMode>
);
