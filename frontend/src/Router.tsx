import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Contest from "./pages/Contest/Contest";
import MakeTactic from "./pages/BlockCoding/MakeTactic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/Contest",
                element: <Contest />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/maketactic",
                element: <MakeTactic />,
                errorElement: <ErrorComponent />,
            },
        ],
        errorElement: <NotFound />
    }
])

export default router;