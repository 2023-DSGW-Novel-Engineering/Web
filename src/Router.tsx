import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Auth from "./pages/Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
