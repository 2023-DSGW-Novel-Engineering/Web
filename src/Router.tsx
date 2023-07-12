import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Auth from "./pages/Auth";
import UserInfo from "./pages/UserInfo";
import UserRoom from "./pages/UserRoom";
import UserSetting from "./pages/UserSetting";
// import { useRecoilValue } from "recoil";
// import { isSignIn } from "./store/atom";

const Router = () => {
  // const SignInCheck = useRecoilValue(isSignIn);
  return (
    <BrowserRouter>
      <Routes>
        {/* {SignInCheck ? ( */}
        <>
          <Route path="/userinfo/:username" element={<UserInfo />} />
          <Route
            path="/userinfo/:username/:friendname"
            element={<UserInfo />}
          />
          <Route path="/userroom/:username/" element={<UserRoom />} />
          <Route path="/userroom/:username/:roomidx" element={<UserRoom />} />
          <Route path="/usersetting/:username" element={<UserSetting />} />
        </>
        {/* ) : ( */}
        <Route path="/auth" element={<Auth />} />
        {/* )} */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
