import { createBrowserRouter } from "react-router-dom";

import { PageLayout } from "./components/page-layout";
import { ListOfTasks } from "./components/list-of-tasks";
import { FormTask } from "./components/form-task";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PageLayout>
                <ListOfTasks />
            </PageLayout>
        ),
    },
    {
        path: "/task",
        element: (
            <PageLayout>
                <FormTask />
            </PageLayout>
        ),
    },
]);
