import { MapPin, Phone, Mail } from 'lucide-react';

const practiceLinks = [
  'Connectivity',
  'Security',
  'Cloud',
  'Datacentre & Compute',
  'Endpoint',
  'Intelligent Automation',
];

const companyLinks = ['About Us', 'Case Studies', 'Interactive Demo', 'Partner Services'];

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sky-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">CI</span>
              </div>
              <span className="font-bold text-lg text-white">Collective IP</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              A specialist IT infrastructure services business built for the channel, enhanced by
              intelligent automation.
            </p>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-sky-500 flex-shrink-0" />
                <span>Suite 214, 1 Water Vole Way, Doncaster, South Yorkshire DN4 5JP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-sky-500 flex-shrink-0" />
                <a href="tel:+442045858990" className="hover:text-white transition-colors">
                  +44 (0) 204 585 8990
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-sky-500 flex-shrink-0" />
                <a href="mailto:contact@collectiveip.co.uk" className="hover:text-white transition-colors">
                  contact@collectiveip.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Practices */}
          <div>
            <h4 className="text-white font-semibold mb-4">Practices</h4>
            <ul className="flex flex-col gap-2.5">
              {practiceLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Collective IP Limited. All rights reserved. Company No. 14460737
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">
              Data Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
