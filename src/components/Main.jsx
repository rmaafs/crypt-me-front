import React from "react";
import Form from "./Form/Form";
import { Route, Routes, HashRouter } from "react-router-dom";
import "./Main.css";
import ViewContent from "./ViewContent/ViewContent";
import FishAnimation from "./FishAnimation/FishAnimation";

const Main = () => {
  return (
    <div className="container">
      <HashRouter
        basename="/"
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path=":id/:secret" element={<ViewContent />} />
        </Routes>
      </HashRouter>
      <FishAnimation />
    </div>
  );
};

export default Main;
