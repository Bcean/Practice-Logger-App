import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Pages/LandingPage";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";

function App() {
  return (
    <>
      <main className="w-full h-full">
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
