import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Practices", path: "/practices" },
  { label: "Intelligent Automation", path: "/intelligent-automation" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Demo", path: "/demo" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`font-heading font-bold text-3xl tracking-tight transition-colors ${
              scrolled || !isHome ? "text-dark" : "text-white"
            }`}
          >
            collective<span className="text-brand-600">ip</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  scrolled || !isHome
                    ? isActive
                      ? "text-brand-600"
                      : "text-gray-700"
                    : isActive
                      ? "text-brand-300"
                      : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/demo"
            className="ml-2 px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-md hover:bg-brand-700 transition-colors"
          >
            Try Our Tools
          </Link>
        </nav>

        <button
          className={`lg:hidden transition-colors ${scrolled || !isHome ? "text-gray-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium hover:text-brand-600 transition-colors ${
                  location.pathname === item.path
                    ? "text-brand-600"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/demo"
              className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-md text-center hover:bg-brand-700 transition-colors"
            >
              Try Our Tools
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
