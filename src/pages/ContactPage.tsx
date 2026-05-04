import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="font-body text-dark antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#3B4041]">
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-[#8B5CF6] text-[11px] text-base font-bold uppercase tracking-[0.2em] mb-4">
            Contact Us
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 uppercase tracking-tight">
            Get In Touch
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            Ready to discuss how we can help your business? Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">Phone</h3>
                  <p className="text-slate-500">0204 585 8990</p>
                </div>
                
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">Email</h3>
                  <p className="text-slate-500">contactus@collectiveip.co.uk</p>
                </div>
                
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">Website</h3>
                  <p className="text-slate-500">www.collectiveip.co.uk</p>
                </div>
                
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">Address</h3>
                  <p className="text-slate-500">
                    Collective IP<br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
                Send Us a Message
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-[#70309d] focus:border-[#70309d]" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-[#70309d] focus:border-[#70309d]" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-[#70309d] focus:border-[#70309d]" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-[#70309d] focus:border-[#70309d]"></textarea>
                </div>
                
                <button type="submit" className="w-full px-6 py-3 bg-[#70309d] text-white text-sm font-bold rounded-md hover:bg-[#5a2680] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
