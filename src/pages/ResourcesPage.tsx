import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ResourcesPage() {
  return (
    <div className="font-body text-dark antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#3B4041]">
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-[#8B5CF6] text-[11px] text-base font-bold uppercase tracking-[0.2em] mb-4">
            Resources
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 uppercase tracking-tight">
            Insights & Knowledge
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            Technical insights, case studies, and thought leadership from our team of experts.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-extrabold text-[#3B4041] uppercase mb-4">
              Latest Articles
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Technical insights and practical advice from our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="text-[#8B5CF6] text-xs font-bold uppercase tracking-wider mb-2">2026</div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Why Good Wi-Fi Connectivity is Essential in Education
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Exploring the critical role of robust wireless infrastructure in modern educational environments and its impact on learning outcomes.
              </p>
              <a href="#" className="text-[#5C2882] text-sm font-bold hover:underline">Read More →</a>
            </article>
            
            <article className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="text-[#8B5CF6] text-xs font-bold uppercase tracking-wider mb-2">2026</div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Rethinking Infrastructure Services
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                How modern infrastructure approaches are transforming service delivery and enabling digital transformation across sectors.
              </p>
              <a href="#" className="text-[#5C2882] text-sm font-bold hover:underline">Read More →</a>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
