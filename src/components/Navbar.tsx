import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { GALLERY_IMAGES, prefetchImages } from "../data/gallery-assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const handlePrefetch = (path: string) => {
    if (path === "/gallery") {
      prefetchImages(GALLERY_IMAGES);
    }
  };

  const isHome = location.pathname === "/";
  const showAlt = scrolled || !isHome;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${showAlt ? "bg-white shadow-md md:pb-2 pt-2" : "bg-transparent py-4"}`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="/logo-icon.png"
              alt="Canela Landscaping & Snow Plow"
              className="h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className={`text-lg lg:text-2xl font-black leading-tight tracking-tighter max-w-[170px] lg:max-w-none ${showAlt ? "text-slate-900" : "text-white"}`}
            >
              Canela Landscaping & Snow Plow
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => handlePrefetch(link.path)}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-emerald-500"
                    : showAlt
                      ? "text-slate-600 hover:text-emerald-600"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-emerald-700 transition-all font-inter"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={showAlt ? "text-slate-900" : "text-white"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 shadow-xl"
        >
          <div className="px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => handlePrefetch(link.path)}
                className="text-right block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
