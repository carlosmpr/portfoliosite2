import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import Navabr from "./components/Navabr";
import Others from "./components/Others";
import PortFolio from "./components/PortFolio";
function App() {
  return (
    <>
      <Navabr />
      <Hero />
      <PortFolio />
      <Others />
      <About />
      <Connect />
    </>
  );
}

export default App;
