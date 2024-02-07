import { createBrowserRouter } from "react-router-dom";

import { PageLayout } from "./components/page-layout";
import { ListOfTasks } from "./components/list-of-tasks";
import { FormCreateTask } from "./components/form-create-task";
import { FormEditTask } from "./components/form-edit-task";

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
                <FormCreateTask />
            </PageLayout>
        ),
    },
    {
        path: "/task/:taskId",
        element: (
            <PageLayout>
                <FormEditTask />
            </PageLayout>
        ),
    },
]);
