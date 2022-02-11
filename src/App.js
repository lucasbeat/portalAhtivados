import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import RoutesPages from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <RoutesPages />
        <ToastContainer autoClose={5000} style={{ width: "400px" }} />
      </Router>
    </div>
  );
}

export default App;
