import "./App.css";

import Home from "./Component/Home";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Experience from "./Component/Experience";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
