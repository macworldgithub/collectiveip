import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Practices", path: "/practices" },
  { label: "Partner Services", path: "/partner-services" },
  { label: "Vendors", path: "/vendors" },
  { label: "Industry Demo", path: "/demo", hideChatbot: true },
  {
    label: "About Collective IP",
    subItems: [
      { label: "About Us", path: "/about" },
      { label: "Resources", path: "/resources" },
    ],
  },
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
      "/privacy-policy",
      "/data-policy",
    ].includes(location.pathname) ||
    location.pathname.startsWith("/demo/") ||
    location.pathname.startsWith("/practices/");

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
        <nav className="hidden lg:flex items-center lg:gap-[0.8rem] xl:gap-7">
          {navLinks.map((item) => {
            const isActive = item.path 
              ? location.pathname === item.path 
              : item.subItems?.some(sub => location.pathname === sub.path);

            if (item.subItems) {
              return (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-600 py-2 ${
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
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-0 top-full w-48 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100/80 p-1.5 flex flex-col gap-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`px-3.5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-between group/item ${
                            location.pathname === sub.path
                              ? "bg-brand-50/60 text-brand-600"
                              : "text-gray-600 hover:bg-gray-50 hover:text-brand-600"
                          }`}
                        >
                          <span>{sub.label}</span>
                          <span className={`opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 ${
                            location.pathname === sub.path ? "text-brand-600" : "text-brand-500"
                          }`}>
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

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
                to={item.path!}
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
              if (item.subItems) {
                return (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 ml-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`text-sm font-medium hover:text-brand-600 transition-colors ${
                            location.pathname === sub.path
                              ? "text-brand-600"
                              : "text-gray-600"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

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
                  to={item.path!}
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
