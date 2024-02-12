import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "components/app-layout";
import { Backlog } from "./backlog";
import { Task } from "./task";
import { Board } from "./board";
import { Scheduler } from "./scheduler";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Board />,
            },
            {
                path: "backlog",
                element: <Backlog />,
            },
            {
                path: "task/:taskId",
                element: <Task />,
            },
            {
                path: "scheduler",
                element: <Scheduler />,
            },
        ],
    },
]);
