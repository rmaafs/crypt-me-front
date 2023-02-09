import React from "react";
import Form from "./Form/Form";
//import { Router } from "@reach/router";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./Main.css";
import ViewContent from "./ViewContent/ViewContent";
import FishAnimation from "./FishAnimation/FishAnimation";

const Main = () => {
  return (
    <div className="container">
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path=":id/:secret" element={<ViewContent />} />
        </Routes>
      </BrowserRouter>
      <FishAnimation />
    </div>
  );
};

export default Main;
