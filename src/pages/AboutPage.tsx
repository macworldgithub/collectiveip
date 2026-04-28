import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Users,
  Award,
  Handshake,
  Trophy,
  Network,
  ShieldCheck,
  Cloud,
  Server,
  Cpu,
  FolderKanban,
  FileText
} from 'lucide-react';

const principles = [
  {
    icon: <Award size={20} />,
    title: 'Pragmatic & Commercial',
    desc: 'We focus on practical outcomes, not theoretical possibilities. Every engagement is structured to deliver measurable business value.',
  },
  {
    icon: <Users size={20} />,
    title: 'Expert-Led',
    desc: 'Our team has been customers, suppliers, and partners. We understand the challenges from every angle and bring real-world experience to every project.',
  },
  {
    icon: <Handshake size={20} />,
    title: 'Channel-First',
    desc: "We exist to enable our partners. We enhance your brand, extend your capabilities, and help you win — we never compete with you.",
  },
  {
    icon: <Trophy size={20} />,
    title: 'Perfectly Executed',
    desc: 'From initial consultation through to post-deployment optimisation, we hold ourselves to the highest standards of delivery excellence.',
  },
];

const expertise = [
  {
    icon: <Network size={20} />,
    title: 'Network & Connectivity',
    desc: 'WAN, LAN, wireless design and deployment across complex multi-site environments',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Security',
    desc: 'End-to-end security from threat analysis through to endpoint protection and compliance',
  },
  {
    icon: <Cloud size={20} />,
    title: 'Cloud & Hybrid',
    desc: 'Public, private, and hybrid cloud architecture, migration, and optimisation',
  },
  {
    icon: <Server size={20} />,
    title: 'Datacentre & HPC',
    desc: 'High-performance computing, storage, virtualisation, and energy-efficient design',
  },
  {
    icon: <Cpu size={20} />,
    title: 'Intelligent Automation',
    desc: 'Practical automation solutions that reduce cost and accelerate service delivery',
  },
  {
    icon: <FolderKanban size={20} />,
    title: 'Project Delivery',
    desc: 'PMO, field services, and end-to-end project management for complex deployments',
  },
];

export default function AboutPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-body text-dark antialiased bg-white">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-[#3B4041]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/aerospace.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f3435]/95 via-[#2f3435]/85 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto px-6">
          <h4 className="text-base font-bold text-[#8B5CF6] uppercase tracking-[0.25em] mb-6">
            ABOUT COLLECTIVE IP
          </h4>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6 max-w-3xl uppercase">
            Your Trusted IT Infrastructure Services Partner
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
            We enable our partners to captivate their customers, expand their services
            portfolio, and drive annuity revenues — led by experts who've walked in your shoes.
          </p>
        </div>
      </section>

      {/* ─── OUR STORY + PRINCIPLES ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Story */}
            <div>
              <h4 className="text-base font-bold text-[#5C2882] uppercase tracking-[0.2em] mb-4">
                OUR STORY
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-8 leading-tight">
                Built by People Who've Been in Your Shoes
              </h2>

              <div className="space-y-5 text-sm text-slate-500 leading-relaxed">
                <p>
                  Collective IP was founded by IT infrastructure professionals who've spent their
                  careers on every side of the table — as customers managing complex estates, as
                  vendors building solutions, and as partners delivering to end users.
                </p>
                <p>
                  That experience gives us a unique perspective. We understand the pressures our
                  partners face: the need to expand services without overextending, to deliver
                  complex projects without the overhead of permanent specialist teams, and to stay
                  ahead of rapidly evolving technology landscapes.
                </p>
                <p>
                  Today, we operate across six core practices — Connectivity, Security, Cloud,
                  Datacentre &amp; Compute, Endpoint Infrastructure, and Intelligent Automation —
                  delivering end-to-end IT infrastructure services exclusively through the channel.
                </p>
                <p>
                  Our commitment is simple: we enable our partners to win. We enhance your brand,
                  extend your capabilities, and deliver with the same care and professionalism as
                  if we were part of your own team.
                </p>
              </div>
            </div>

            {/* Right — Principles */}
            <div className="flex flex-col gap-6">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-xl border border-slate-100 p-6 flex items-start gap-5 hover:border-[#8B5CF6]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#F3E8FF] text-[#5C2882] rounded-full flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#3B4041] mb-1">{p.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section className="py-14 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <h4 className="text-base font-bold text-[#5C2882] uppercase tracking-[0.2em] mb-4">
              OUR EXPERTISE
            </h4>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-4">
              Deep Technical Capability
            </h2>
            <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
              Our team brings decades of combined experience across the full spectrum of
              IT infrastructure disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="bg-white  rounded-xl border border-slate-100 p-6 flex items-start gap-5
                 hover:border-[#8B5CF6]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#F3E8FF] text-[#5C2882] rounded-full flex items-center justify-center flex-shrink-0">
                  {e.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#3B4041] mb-1">{e.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / GET IN TOUCH ─── */}
      <section className="py-24 bg-[#3B4041]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Info */}
            <div>
              <h4 className="text-base font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-4">
                GET IN TOUCH 
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white uppercase mb-6 leading-tight">
                Let's Start a Conversation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md mb-12">
                Whether you're looking to expand your services portfolio, explore intelligent
                automation solutions, or need expert IT infrastructure support — we'd love to
                hear from you.
              </p>

              <div className="space-y-8">
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#5C2882]/20 text-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Office</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Suite 214, 1 Water Vole Way<br />
                      Doncaster, South Yorkshire<br />
                      DN4 5JP
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#5C2882]/20 text-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Phone</h4>
                    <a
                      href="tel:+442045858990"
                      className="text-xs text-slate-400 hover:text-[#8B5CF6] transition-colors"
                    >
                      +44 (0) 204 585 8990
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#5C2882]/20 text-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Email</h4>
                    <a
                      href="mailto:info@collectiveip.co.uk"
                      className="text-xs text-slate-400 hover:text-[#8B5CF6] transition-colors"
                    >
                      info@collectiveip.co.uk
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#5C2882]/20 text-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/company/collectiveip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-[#8B5CF6] transition-colors"
                    >
                      linkedin.com/company/collectiveip
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Quick Enquiry Form */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-2xl">
              <h3 className="font-heading text-lg font-extrabold text-[#3B4041] uppercase tracking-tight mb-8">
                Quick Enquiry
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Enquiry submitted! We will be in touch shortly.');
                  setForm({ name: '', company: '', email: '', phone: '', message: '' });
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs text-[#3B4041] placeholder-slate-300 focus:outline-none focus:border-[#8B5CF6] transition-all bg-[#F9FAFB]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs text-[#3B4041] placeholder-slate-300 focus:outline-none focus:border-[#8B5CF6] transition-all bg-[#F9FAFB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs text-[#3B4041] placeholder-slate-300 focus:outline-none focus:border-[#8B5CF6] transition-all bg-[#F9FAFB]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 (0) ..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs text-[#3B4041] placeholder-slate-300 focus:outline-none focus:border-[#8B5CF6] transition-all bg-[#F9FAFB]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    How can we help? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-xs text-[#3B4041] placeholder-slate-300 focus:outline-none focus:border-[#8B5CF6] transition-all bg-[#F9FAFB] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#5C2882] text-white text-xs font-bold rounded-lg hover:bg-[#4C1D95] transition-all duration-300 shadow-lg shadow-[#5C2882]/20"
                >
                  Send Enquiry <ArrowRight size={16} />
                </button>
              </form>

              <p className="text-[9px] text-slate-400 mt-6 text-center uppercase tracking-widest font-bold">
                Company Registration: 15770314
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#3B4041] uppercase mb-6 tracking-tight">
            Ready to Explore a Partnership?
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto mb-10">
            See our interactive tools in action, review our case studies, or get in touch
            to discuss how we can support your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#5C2882] text-white text-xs font-bold rounded-lg hover:bg-[#4C1D95] transition-all duration-300 shadow-lg shadow-[#5C2882]/20"
            >
              Try Our Tools <ArrowRight size={16} />
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-button-gray border border-slate-300 text-black text-xs font-bold rounded-lg hover:border-[#5C2882] hover:text-[#5C2882] transition-all duration-300"
            >
              <FileText size={16} /> View Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
