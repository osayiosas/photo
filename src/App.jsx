import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./page/home/home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Gallary from "./page/gallary/Gallary";
import Found from "./page/notfound/Found";
import Plans from "./page/plans/Plans";
import Traniner from "./page/traniners/Traniner";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Home />
        <About />
        <Contact />
        <Gallary />
        <Found />
        <Plans />
        <Traniner />
        
      </Router>
    </div>
  );
};

export default App;
