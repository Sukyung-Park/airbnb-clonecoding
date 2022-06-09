import "./App.css";
import React from "react";
import MainPage from "./Page/MainPage";
import ContactPage from "./Page/ContactPage";
import HostPage from "./Page/HostPage";
import HelpPage from "./Page/HelpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />}></Route>
          <Route path="/contact" exact element={<ContactPage />}></Route>
          <Route path="/host" exact element={<HostPage />}></Route>
          <Route path="/help" exact element={<HelpPage />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Route exact path="/">
        <div>
          {" "}
          <MainPage />
        </div>
      </Route>
      <Route path="/contact">
        <div>
          <ContactPage />
        </div>
      </Route>
      <Route path="/host">
        <div>
          <HostPage />
        </div>
      </Route> */}
    </div>
  );
}

export default App;
