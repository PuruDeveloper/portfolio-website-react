import "./App.css";

import Home from "./Component/Home";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Experience from "./Component/Experience";
import Skills from "./Component/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
