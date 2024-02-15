import { createBrowserRouter } from "react-router-dom";

import { Backlog } from "@/pages/backlog";
import { Board } from "@/pages/board";
import { Calendar } from "@/pages/calendar";
import { Task } from "@/pages/task";
import { AppLayout } from "./app-layout";

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
                path: "calendar",
                element: <Calendar />,
            },
        ],
    },
]);
