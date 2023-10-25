import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";
import Services from "./components/Services.js";
import Tours from "./components/Tours.js";
import Navbar from "./components/Navbar.js";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
