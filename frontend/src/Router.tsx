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
import UserInfoEdit from "./components/MyPage/UserInfoEdit";
import FreeBoardDetail from "./pages/FreeBoard/FreeBoardDetail";
import FreeBoardUpdate from "./pages/FreeBoard/FreeBoardUpdate";
import TacticBoardList from "./pages/TacticBoard/TacticBoardList";
import TacticBoardDetail from "./pages/TacticBoard/TacticBoardDetail";
import TacticBoardCreate from "./pages/TacticBoard/TacticBoardCreate";
import ContestManagement from "./pages/Admin/ContestManagement";
import MessageBox from "./pages/Message/MessageBox";
import ContestProgress from "./pages/Contest/ContestProgress";
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
                path: "/userinfoedit",
                element: <UserInfoEdit/>,
                errorElement: <ErrorComponent/>
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
            {
                path: "/tacticboard",
                element: <TacticBoardList/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/tacticboarddetail",
                element: <TacticBoardDetail/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/tacticboardcreate",
                element: <TacticBoardCreate/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/contestmanagement",
                element: <ContestManagement/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/message",
                element: <MessageBox/>,
                errorElement: <ErrorComponent/>,
              },
            {
                path: "/contestprogress",
                element: <ContestProgress/>,
                errorElement: <ErrorComponent/>,
              },

        ],
        errorElement: <NotFound />
    }
])

export default router;