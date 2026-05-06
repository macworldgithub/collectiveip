import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const vendors = [
  "Cisco",
  "Cisco Meraki",
  "Dell Technologies",
  "Aruba",
  "Hewlett Packard Enterprise",
  "Gigamon",
  "Microsoft Partner",
  "Palo Alto Networks",
  "Avaya",
  "Ruckus",
  "Cambium Networks",
  "Trellix",
  "Extreme Networks",
  "Crowdstrike",
  "Juniper Networks",
  "Exabeam",
  "Nokia",
  "Ekahau",
  "Ceragon",
  "Fortinet",
  "Teltonika",
  "Rhombus",
  "Siklu",
  "Sophos",
  "Peplink",
  "Oncam",
  "Barracuda",
  "Veeam",
  "Cradlepoint",
  "SolarWinds"
];

export default function VendorsPage() {
  return (
    <div className="font-body text-dark antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#3B4041]">
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-[#8B5CF6] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Vendors
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 uppercase tracking-tight">
            Strategic Technology Partnerships
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            We partner with leading technology vendors to deliver comprehensive solutions that meet the evolving needs of our customers.
          </p>
        </div>
      </section>

      {/* Our Vendor Approach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative">
              <img
                src="/images/vendor_approach.png"
                alt="Our Vendor Approach"
                className="w-full h-auto object-cover max-w-md mx-auto lg:max-w-none"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#70309D] mb-6">
                Our Vendor Approach
              </h2>
              <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
                <p>
                  Our partner strategy is based on flexibility, technical insight and commercial alignment. By maintaining a vendor-agnostic approach, we focus on identifying and delivering the most suitable IT solutions based on specific business requirements rather than vendor preferences.
                </p>
                <p>
                  This neutrality allows us to assess a broad range of technologies objectively, enabling us to recommend and implement solutions that best align with customer goals, technical environments and budget constraints. It also simplifies procurement by offering access to a diverse ecosystem of vendors through a single point of engagement.
                </p>
                <p>
                  At the same time, we maintain strong relationships with key vendors across networking, cloud, security, data centre, and endpoint infrastructure. These partnerships give us direct access to valuable resources, roadmap insights and commercial advantage, ensuring our partners and their customers benefit from both independent advice and preferential vendor support.
                </p>
                <p>
                  Our experience working across multiple platforms and providers helps streamline deployment, reduce risk and ensure interoperability across systems. In doing so, we support partners in delivering reliable, scalable infrastructure and services that adapt to evolving customer needs.
                </p>
                <p>
                  This approach ensures your customers receive ongoing support from technical experts with a comprehensive view of the market, helping them make informed decisions and maximise the return on their IT investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot of our vendor capabilities Section */}
      <section className="py-14 relative overflow-hidden bg-white border-t border-slate-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <img src="/images/vendor_bg.png" alt="Background Pattern" className="w-full h-full object-cover object-top" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#70309D] mb-4">
              Snapshot of our vendor capabilities
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-12 items-center justify-items-center">
            {vendors.map((vendor, index) => {
              const filename = vendor.toLowerCase().replace(/ /g, '-');
              return (
                <div key={index} className="w-full max-w-[140px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <img
                    src={`/images/vendors/${filename}.png`}
                    alt={`${vendor} Logo`}
                    className="max-w-full max-h-[60px] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const span = document.createElement('span');
                        span.className = 'text-sm font-semibold text-slate-400 text-center';
                        span.textContent = vendor;
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
