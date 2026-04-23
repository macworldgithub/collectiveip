import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'Practices', 'Intelligent Automation', 'Case Studies', 'Demo', 'About'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">CI</span>
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Collective IP
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="ml-2 px-4 py-2 bg-sky-600 text-white text-sm font-semibold rounded-md hover:bg-sky-700 transition-colors"
          >
            Try Our Tools
          </a>
        </nav>

        <button
          className={`lg:hidden transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-sky-600">
                {item}
              </a>
            ))}
            <a
              href="#"
              className="px-4 py-2 bg-sky-600 text-white text-sm font-semibold rounded-md text-center hover:bg-sky-700 transition-colors"
            >
              Try Our Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
