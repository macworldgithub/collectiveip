import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, MapPin, Phone, Mail, Users, Target, Shield, Zap } from 'lucide-react';

const values = [
  {
    icon: <Users size={24} />,
    title: 'Channel First',
    desc: 'We exist to serve the channel. Every service, tool, and engagement model is designed to help partners grow their business, not compete with them.',
  },
  {
    icon: <Target size={24} />,
    title: 'Outcome Focused',
    desc: 'We measure success by customer outcomes, not activity. Our goal is always to deliver tangible business value — on time, on budget, first time right.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Expert Delivery',
    desc: 'Deep technical expertise across six core practices, built on over 20 years of combined experience across complex, large-scale infrastructure programmes.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Intelligent by Design',
    desc: 'We believe automation and AI should enhance human expertise, not replace it. Our intelligent tooling makes good engineers more effective.',
  },
];

const team = [
  {
    name: 'Leadership Team',
    desc: 'Our leadership team brings together decades of experience across IT channel, infrastructure delivery, and intelligent automation — with a shared commitment to building a specialist business that genuinely helps partners succeed.',
  },
];

const stats = [
  { value: '150+', label: 'Deployments Delivered' },
  { value: '20+', label: 'Years Combined Experience' },
  { value: '6', label: 'Core Practice Areas' },
  { value: '100%', label: 'Channel Focused' },
];

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.15),_transparent_60%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-sky-600/20 border border-sky-500/30 rounded-full text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6">
              Who We Are
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              About <span className="text-sky-400">Collective IP</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              A specialist IT infrastructure services business built for the channel. We help
              partners expand their services portfolio, deliver efficiently, and create lasting
              commercial value — enhanced by intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built for the Channel, by People Who Know It
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Collective IP was founded with a clear purpose: to give IT channel partners access
                to the specialist expertise, scalable delivery capability, and intelligent tooling
                they need to compete and grow.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                We operate as a true delivery partner — extending your team's capability across six
                core infrastructure practices, from connectivity and security through to cloud,
                compute, endpoint, and intelligent automation.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our approach is always commercial and pragmatic. We help you win and deliver more
                work, build annuity revenue, and strengthen the relationships that drive your
                business forward.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:gap-3 transition-all duration-200"
              >
                Explore our partner services <ArrowRight size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-slate-900 rounded-xl p-8 text-center"
                >
                  <div className="text-4xl font-bold text-sky-400 mb-2">{s.value}</div>
                  <div className="text-slate-300 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              How We Work
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The principles that guide every engagement, every delivery, and every partnership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                Company Information
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Collective IP Limited</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Collective IP Limited is a registered company in England and Wales. We are
                headquartered in Doncaster, South Yorkshire, and deliver projects across the UK
                and internationally.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-sky-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">
                      Registered Office
                    </div>
                    <div className="text-gray-500 text-sm">
                      Suite 214, 1 Water Vole Way, Doncaster, South Yorkshire DN4 5JP
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-sky-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">Telephone</div>
                    <a
                      href="tel:+442045858990"
                      className="text-gray-500 text-sm hover:text-sky-600 transition-colors"
                    >
                      +44 (0) 204 585 8990
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-sky-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">Email</div>
                    <a
                      href="mailto:contact@collectiveip.co.uk"
                      className="text-gray-500 text-sm hover:text-sky-600 transition-colors"
                    >
                      contact@collectiveip.co.uk
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="text-sm text-gray-400">Company No. 14460737</div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner With Us?</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you're looking to expand your services portfolio, improve delivery
                efficiency, or explore intelligent automation — we're ready to help.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-500 transition-colors duration-200 w-fit"
              >
                Get in Touch <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
