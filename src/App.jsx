import "./App.css";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Landingpage from "./Components/Hero/Landingpage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
      <About />
      <Events />
      <Contact />
    </div>
  );
}

export default App;
