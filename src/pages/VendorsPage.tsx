import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function VendorsPage() {
  return (
    <div className="font-body text-dark antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#3B4041]">
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-[#8B5CF6] text-[11px] text-base font-bold uppercase tracking-[0.2em] mb-4">
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

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-extrabold text-[#3B4041] uppercase mb-4">
              Our Vendor Partners
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Best-in-class technology partnerships that enable us to deliver exceptional outcomes.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-slate-500 text-lg">
              Vendor partnerships content coming soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
