import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./app-layout";
import { Backlog } from "pages/backlog";
import { Task } from "pages/task";
import { Board } from "pages/board";
import { Scheduler } from "pages/scheduler";

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
