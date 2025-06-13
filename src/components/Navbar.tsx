import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/sf-logo.png";

// Add custom animation keyframes at the top level
const styles = `
@keyframes float {
  0% {
    transform: translateY(0px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  50% {
    transform: translateY(-5px);
    box-shadow: 0 25px 15px rgba(0,0,0,0.1);
  }
  100% {
    transform: translateY(0px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(255,255,255,0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(255,255,255,0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(255,255,255,0.1);
  }
}

@keyframes lightSweep {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.dark .logo-glow {
  animation: glow 3s ease-in-out infinite;
}

.dark .logo-sweep {
  position: relative;
  overflow: hidden;
}

.dark .logo-sweep::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  background-size: 200% 100%;
  animation: lightSweep 2s ease-in-out infinite;
  pointer-events: none;
  border-radius: 50%;
}

.logo-float {
  animation: float 6s ease-in-out infinite;
}

.logo-container {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.logo-3d {
  transition: transform 0.2s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}

@keyframes coin-flip {
  0% {
    transform: rotateY(0deg);
  }
  20% {
    transform: rotateY(720deg);
  }
  40% {
    transform: rotateY(720deg);
  }
  60% {
    transform: rotateY(1440deg);
  }
  80% {
    transform: rotateY(1440deg);
  }
  100% {
    transform: rotateY(2160deg);
  }
}

.logo-coin {
  animation: coin-flip 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
  backface-visibility: visible;
  -webkit-backface-visibility: visible;
}

.logo-coin:hover {
  animation-play-state: paused;
}

/* Ensure the logo is visible in both modes */
.logo-coin {
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dark .logo-coin {
  background: var(--color-primary);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}
`;

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return;

    const logo = logoRef.current;
    const rect = logo.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!logoRef.current) return;
    logoRef.current.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm dark:bg-primary shadow-lg dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <style>{styles}</style>
            <div
              className="logo-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                <img
                  ref={logoRef}
                  src={logo}
                  alt="logo"
                  className={`h-16 w-16 rounded-[50%] object-cover bg-white dark:bg-primary p-1 transition-all duration-300 will-change-transform ${
                    isLoaded ? "logo-coin" : ""
                  } ${darkMode ? "logo-glow logo-sweep" : ""} hover:scale-110`}
                />
              </h1>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white cursor-pointer transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-tertiary transition-colors duration-200 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-tertiary transition-colors duration-200 text-gray-600 dark:text-gray-300"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white cursor-pointer transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleDarkMode();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
