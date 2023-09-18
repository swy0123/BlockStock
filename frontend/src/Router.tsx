import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Contest from "./pages/Contest/Contest";
import MakeTactic from "./pages/MakeTactic/MakeTactic";
import Login from "./pages/Account/Login";
import SignUp from "./pages/Account/SignUp";
import CurrentContest from "./pages/Contest/CurrentContest";
import FindPw from "./pages/Account/FindPw";
import ExpectedContest from "./pages/Contest/ExpectedContest";
import CompletedContest from "./pages/Contest/CompletedContest";
import MyPage from "./pages/Member/MyPage";
import FreeBoardList from "./pages/FreeBoard/FreeBoardList";
import FreeBoardCreate from "./pages/FreeBoard/FreeBoardCreate";
import FreeBoardDetail from "./pages/FreeBoard/FreeBoardDetail";
import FreeBoardUpdate from "./pages/FreeBoard/FreeBoardUpdate";
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
                path: "/contest",
                element: <Contest />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/currentcontest",
                element: <CurrentContest />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/expectedcontest",
                element: <ExpectedContest />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/completedcontest",
                element: <CompletedContest />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/maketactic",
                element: <MakeTactic />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/login",
                element: <Login/>,
                errorElement: <ErrorComponent/>,
            },
            {
              path: "/signup",
              element: <SignUp/>,
              errorElement: <ErrorComponent/>,
            },
            {
                path: "/findpw",
                element: <FindPw/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/mypage",
                element: <MyPage/>,
                errorElement: <ErrorComponent/>,
            },
            {
                path: "/freeboard",
                element: <FreeBoardList/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/freeboardcreate",
                element: <FreeBoardCreate/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/freeboarddetail",
                element: <FreeBoardDetail/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/freeboardupdate",
                element: <FreeBoardUpdate/>,
                errorElement: <ErrorComponent/>,
              },
        ],
        errorElement: <NotFound />
    }
])

export default router;