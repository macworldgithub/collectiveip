import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoBadge from "../components/LogoBadge";
import {
  Building,
  Landmark,
  Monitor,
  TreePine,
  LayoutTemplate,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  FileText,
  ExternalLink,
} from "lucide-react";

export type BrandedDemo = {
  slug: string;
  title: string;
  subtitle: string;
  original: string;
  description: string;
  features: string[];
  gradient: string;
  status: "Live" | "Coming Soon" | "Widget";
  icon: React.ReactNode;
  url: string;
  logo: string;
  image: string;
  originalUrl: string;
};

export const brandedDemos: BrandedDemo[] = [
  {
    slug: "real-estate",
    title: "Collective Real Estate",
    subtitle: "Property Intelligence Portal",
    original: "Knight Frank",
    description:
      "A fully-branded property portal experience with intelligent search, automated valuations, and tenant engagement — powered by Collective IP's Digital Front Door platform.",
    features: [
      "Smart property search & filters",
      "Automated valuation modelling",
      "Tenant portal & maintenance requests",
      "Investment portfolio tracking",
    ],
    gradient: "from-teal-500 to-blue-600",
    status: "Live",
    icon: <Building size={24} />,
    url: "#",
    logo: "/images/logos/knight-frank.png",
    image: "/images/logos/knight-frank.png",
    originalUrl: "https://www.knightfrank.com",
  },
  {
    slug: "banking",
    title: "Collective IP Banking",
    subtitle: "Digital Banking Experience",
    original: "GB Bank",
    description:
      "Secure digital banking interface with account management, transfers, and AI-powered financial insights — rebuilt under the Collective IP brand for a seamless customer experience.",
    features: [
      "Account management dashboard",
      "Secure transfers & payments",
      "AI financial insights",
      "Fraud detection alerts",
    ],
    gradient: "from-emerald-500 to-green-600",
    status: "Live",
    icon: <Landmark size={24} />,
    url: "#",
    logo: "/images/logos/gb-bank.png",
    image: "/images/logos/banking-bg.png",
    originalUrl: "https://www.gbbank.co.uk",
  },
  {
    slug: "it-solutions",
    title: "Collective IT Solutions",
    subtitle: "Procurement & Managed Services Widget",
    original: "Softcat",
    description:
      "Interactive IT procurement widget for enterprise device cataloguing, software licensing, and managed services quoting — embeddable on any partner site.",
    features: [
      "Device & software catalog",
      "Quote builder",
      "License management",
      "Service desk integration",
    ],
    gradient: "from-orange-500 to-amber-600",
    status: "Widget",
    icon: <Monitor size={24} />,
    url: "#",
    logo: "/images/logos/softcat.png",
    image: "/images/logos/softcat.png",
    originalUrl: "https://www.softcat.com",
  },
  {
    slug: "concierge",
    title: "Collective Concierge",
    subtitle: "Golf, Resort & Leisure Booking",
    original: "Rosa Penna",
    description:
      "Hospitality concierge for golf, resort stays, and leisure bookings — with intelligent scheduling, personalised recommendations, and membership management.",
    features: [
      "Tee time & court booking",
      "Resort stay reservations",
      "Personalised recommendations",
      "Membership management",
    ],
    gradient: "from-green-500 to-lime-600",
    status: "Live",
    icon: <TreePine size={24} />,
    url: "https://www.rosapenna.ie/",
    logo: "/images/logos/rosa-penna.png",
    image: "/images/logos/rosa-penna.png",
    originalUrl: "https://www.rosapenna.ie/",
  },
  {
    slug: "kiosk",
    title: "Collective Kiosk",
    subtitle: "Interactive Self-Service Terminal",
    original: "BYD-style Kiosk",
    description:
      "Touch-screen kiosk experience for showrooms, retail, and events — enabling self-guided product exploration, lead capture, and wayfinding.",
    features: [
      "Product explorer & 3D viewer",
      "Self-service check-in",
      "Lead capture forms",
      "Wayfinding & showroom maps",
    ],
    gradient: "from-rose-500 to-red-600",
    status: "Coming Soon",
    icon: <LayoutTemplate size={24} />,
    url: "#",
    logo: "/images/logos/byd.png",
    image: "/images/logos/byd.png",
    originalUrl: "https://www.byd.com",
  },
];

export default function BrandedDemoPage() {
  const { slug } = useParams<{ slug: string }>();
  const demo = brandedDemos.find((d) => d.slug === slug);

  if (!demo) {
    return (
      <div className="font-body text-dark antialiased bg-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold text-[#3B4041] mb-4">
              Demo Not Found
            </h1>
            <p className="text-slate-500 mb-8">
              The branded demo you are looking for does not exist.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white text-sm font-bold rounded hover:bg-[#5a2680] transition-all"
            >
              <ArrowLeft size={16} /> Back to Demos
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const statusColor =
    demo.status === "Live"
      ? "bg-green-500"
      : demo.status === "Widget"
        ? "bg-blue-500"
        : "bg-yellow-500";

  const statusText =
    demo.status === "Live"
      ? "Live Demo Available"
      : demo.status === "Widget"
        ? "Widget Available"
        : "Coming Soon";

  return (
    <div className="font-body text-dark antialiased bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-[#3B4041]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/retail.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f3435]/95 via-[#2f3435]/85 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-bold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to All Demos
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#8B5CF6]">{demo.icon}</span>
            <h4 className="text-base font-bold text-[#8B5CF6] uppercase tracking-[0.25em]">
              {demo.subtitle}
            </h4>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6 max-w-3xl">
            {demo.title}
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
            {demo.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 ${statusColor} rounded-full`} />
              <span className="text-xs text-slate-300 font-medium">
                {statusText}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8B5CF6] rounded-full" />
              <a
                href={demo.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 font-medium hover:text-white transition-colors inline-flex items-center gap-1"
                onClick={(e) => demo.originalUrl === "#" && e.preventDefault()}
              >
                Originally: {demo.original}
                {demo.originalUrl !== "#" && <ExternalLink size={10} />}
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-3">
              <LogoBadge
                logo={demo.logo}
                brand={demo.original}
                size="md"
                className="drop-shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-white/50 text-[10px] uppercase tracking-wider font-semibold">
                  Originally Built For
                </span>
                <span className="text-white text-sm font-bold">
                  {demo.original}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-extrabold text-[#3B4041] uppercase mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {demo.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#8B5CF6] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="h-48 sm:h-56 relative overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">
                  Experience the Demo
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  See how this solution can be deployed for your customers with
                  full Collective IP branding and customisation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white text-xs font-bold rounded hover:bg-[#5a2680] transition-all"
                  >
                    Launch Demo <ArrowRight size={14} />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#3B4041] border border-slate-200 text-xs font-bold rounded hover:bg-slate-50 transition-all"
                  >
                    <FileText size={14} /> Request Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Demos */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-10">
            Explore Other Collective-Branded Demos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandedDemos
              .filter((d) => d.slug !== demo.slug)
              .map((d) => (
                <a
                  key={d.slug}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#70309d] transition-colors"
                >
                  <div className="h-32 relative overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold text-[#3B4041] mb-1 group-hover:text-[#70309d] transition-colors">
                      {d.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-2">
                      {d.description}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-[#3B4041]">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white uppercase mb-6 tracking-tight">
            Want This for Your Business?
          </h2>
          <p className="text-base text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We deploy these demos under your brand, trained on your knowledge
            base, and customised for your customers. Let's talk about what's
            possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#8B5CF6] text-white text-xs font-bold rounded hover:bg-[#5a2680] transition-all shadow-xl shadow-[#8B5CF6]/30"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-8 py-3 bg-button-gray text-black border border-white/30 text-xs font-bold rounded hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={16} /> All Demos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
