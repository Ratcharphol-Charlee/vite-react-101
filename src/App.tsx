import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./store/Store";

//components
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import Home from "./components/Home/Home";
function App() {
  return (
    <div>
      <Provider store={Store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
