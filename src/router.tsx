import { createBrowserRouter } from "react-router-dom";

import { PageLayout } from "./components/page-layout";
import { Backlog } from "./components/backlog";
import { FormEditTask } from "./components/form-edit-task";
import { Board } from "./components/board";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
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
                element: <FormEditTask />,
            },
            {
                path: "calendar",
                element: <h1>Calendar, coming soon...</h1>,
            },
        ],
    },
]);
