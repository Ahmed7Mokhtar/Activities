import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ActivityDashboard from "../../features/Activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/Activities/details/ActivityDetails";
import ActivityForm from "../../features/Activities/form/ActivityForm";
import App from "../layout/App";

// routes
export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            // key is for reseting component state for navigating to the same compoenent
            {path: 'createActivity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />},
        ]
    }
]

export const router = createBrowserRouter(routes); 