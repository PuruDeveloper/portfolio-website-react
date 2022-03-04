import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Home from "./Component/Home";
import About from "./Component/About";
import Projects from "./Component/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
