import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navabr from "./components/Navabr";
import Others from "./components/Others";
import PortFolio from "./components/PortFolio";
function App() {
  let count = 0
  return (
    <>
      <Navabr />
      <Hero />
      <PortFolio count={count}/>
      <Others />
      <About />
      <Connect />
    <Footer />
    </>
  );
}

export default App;
