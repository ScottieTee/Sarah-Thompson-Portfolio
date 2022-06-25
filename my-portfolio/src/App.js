import Navbar from './componets/Navbar.jsx';
import Hero from './componets/hero';
import Contact from './componets/contact';
import About from './componets/about';
import Projects from './componets/projects';
import "./app.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;