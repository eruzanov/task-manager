import { createBrowserRouter } from "react-router-dom";

import { PageLayout } from "./components/page-layout";
import { ListOfTasks } from "./components/list-of-tasks";
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
                element: <ListOfTasks />,
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
