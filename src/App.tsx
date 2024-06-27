import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

export function App() {
  return (
    <div className="App">
      <div className="z-10 sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 animate-slideInDown">
        <Navbar />
      </div>
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  );
}
