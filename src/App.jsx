import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Pages/LandingPage";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";
import { PrivateRoute } from "./Components/PrivateRoute";
import { Dashboard } from "./Pages/Dashboard";
import { PracticeLog } from "./Pages/PracticeLog";
import { Stats } from "./Pages/Stats";
import { Settings } from "./Pages/Settings";

function App() {
  return (
    <>
      <main className="w-full h-full">
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
          <Route
            path="/Dashboard"
            element={
              <PrivateRoute>
                {" "}
                {/* Route can only be accessed by Proper Login */}
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/PracticeLog"
            element={
              <PrivateRoute>
                <PracticeLog />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/Stats"
            element={
              <PrivateRoute>
                <Stats />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/Settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
