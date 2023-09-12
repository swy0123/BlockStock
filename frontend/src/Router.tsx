import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Contest from "./pages/Contest/Contest";
import BlockCoding from "./pages/BlockCoding/BlockCoding";

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
                path: "/blockcoding",
                element: <BlockCoding />,
                errorElement: <ErrorComponent />,
            },
        ],
        errorElement: <NotFound />
    }
])

export default router;