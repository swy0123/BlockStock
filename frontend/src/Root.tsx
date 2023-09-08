import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
function App() {

  return (
    <Outlet />
  );
}

function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Root;
