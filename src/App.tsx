import { useEffect } from 'react'; // 1. Import useEffect from React
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  // 2. Dynamically inject your live Vercel AI widget script on load
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://stefanos-ai-agent.vercel.app';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script asset when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-primary transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;





/* import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-primary transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
} */

//export default App;
