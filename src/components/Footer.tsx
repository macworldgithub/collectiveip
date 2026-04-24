import { Link } from 'react-router-dom';

const practiceLinks = [
  { label: 'Connectivity', path: '/practices' },
  { label: 'Security', path: '/practices' },
  { label: 'Cloud', path: '/practices' },
  { label: 'Datacentre & Compute', path: '/practices' },
  { label: 'Endpoint', path: '/practices' },
  { label: 'Intelligent Automation', path: '/intelligent-automation' },
];

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Interactive Demo', path: '/demo' },
  { label: 'Partner Services', path: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-[#3B4041] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="font-heading text-2xl tracking-tight text-white">
                collective<span className="text-brand-400">ip</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              Your trusted IT infrastructure services partner for the channel. Helping partners expand capability, deliver efficiently, and grow.
            </p>
          </div>

          {/* Practices */}
          <div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">Practices</h4>
            <ul className="flex flex-col gap-4">
              {practiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">Contact</h4>
            <div className="flex flex-col gap-4 text-slate-300 text-sm">
              <p>Collective IP Limited</p>
              <p>
                Suite 214, 1 Water Vole Way<br />
                Doncaster, South Yorkshire<br />
                DN4 5JP
              </p>
              <a href="tel:+442045858990" className="hover:text-white transition-colors">
                +44 (0) 204 585 8990
              </a>
              <a href="mailto:info@collectiveip.co.uk" className="hover:text-white transition-colors">
                info@collectiveip.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © 2026 Collective IP Limited. All rights reserved. Company No. 14460737
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 text-xs hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 text-xs hover:text-white transition-colors">
              Data Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

