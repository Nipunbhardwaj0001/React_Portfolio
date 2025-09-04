import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
            <main>
        <Hero />

        {/* Smooth blurry divider */}
        <div></div>

        <About />

        <div className="h-20 bg-gradient-to-b from-transparent via-black to-transparent blur-xl"></div>

        <Skills />

        <div className="h-32 bg-gradient-to-b from-transparent via-green-600/10 to-transparent blur-xl"></div>

        <Projects />

        <div className="h-32 bg-gradient-to-b from-transparent via-green-500/10 to-transparent blur-xl"></div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
