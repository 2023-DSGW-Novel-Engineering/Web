import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Auth from "./pages/Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/userinfo/:username" />
        <Route path="/userroom/:username" />
        <Route path="/usersetting/:username" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
