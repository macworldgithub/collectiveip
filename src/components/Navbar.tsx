import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Practices", path: "/practices" },
  { label: "Partner Services", path: "/partner-services" },
  { label: "Vendors", path: "/vendors" },
  { label: "Industry Demo", path: "/demo", hideChatbot: true },
  { label: "Resources", path: "/resources" },
  { label: "About Collective IP", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ ADDED

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

  const isDarkHeroPage =
    [
      "/practices",
      "/partner-services",
      "/vendors",
      "/resources",
      "/case-studies",
      "/demo",
      "/about",
      "/contact",
    ].includes(location.pathname) || location.pathname.startsWith("/demo/");

  const shouldBeWhite = scrolled || (!isHome && !isDarkHeroPage);
  const isDarkBg = !scrolled && isDarkHeroPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : isDarkBg
            ? "bg-[#3B4041]"
            : isHome
              ? "bg-transparent"
              : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`font-heading font-bold text-3xl tracking-tight transition-colors ${
              shouldBeWhite ? "text-dark" : "text-white"
            }`}
          >
            collective<span className="text-brand-600">ip</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;

            // ✅ SPECIAL CASE: Industry Demo
            if (item.hideChatbot) {
              return (
                <button
                  key={item.path}
                  onClick={() =>
                    navigate("/demo", {
                      state: { fromIndustryDemo: true },
                    })
                  }
                  className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                    shouldBeWhite
                      ? isActive
                        ? "text-brand-600"
                        : "text-gray-700"
                      : isActive
                        ? "text-brand-300"
                        : "text-white/90"
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  shouldBeWhite
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

          {/* Try Our Tools → always show chatbot */}
          <Link
            to="/demo"
            state={{ fromIndustryDemo: false }}
            className="ml-2 px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-md hover:bg-brand-700 transition-colors"
          >
            Try Our Tools
          </Link>
        </nav>

        <button
          className={`lg:hidden transition-colors ${
            shouldBeWhite ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((item) => {
              if (item.hideChatbot) {
                return (
                  <button
                    key={item.path}
                    onClick={() =>
                      navigate("/demo", {
                        state: { fromIndustryDemo: true },
                      })
                    }
                    className="text-sm font-medium text-gray-700 hover:text-brand-600 text-left"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
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
              );
            })}

            <Link
              to="/demo"
              state={{ fromIndustryDemo: false }}
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
