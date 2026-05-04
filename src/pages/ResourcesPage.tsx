import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X } from "lucide-react";

// Blog content data
const blogContent = {
  "wifi-education": {
    title: "Why Good Wi-Fi Connectivity is Essential in Education",
    date: "2026",
    author: "Collective IP Team",
    content: `
      <h2 class="text-2xl font-bold mb-4">The Digital Learning Revolution</h2>
      <p class="mb-4">In today's educational landscape, robust wireless infrastructure has become as fundamental as electricity and running water. The shift toward digital learning environments, coupled with the proliferation of personal devices, has transformed Wi-Fi from a convenience to a critical educational utility.</p>
      
      <h3 class="text-xl font-bold mb-3">Supporting Modern Learning Methodologies</h3>
      <p class="mb-4">Modern educational approaches increasingly rely on seamless connectivity. Interactive learning platforms, collaborative tools, and digital assessment systems all depend on reliable Wi-Fi infrastructure. When students and teachers can't connect, the entire learning experience grinds to a halt.</p>
      
      <h3 class="text-xl font-bold mb-3">Device Density Challenges</h3>
      <p class="mb-4">Today's classrooms often support 30+ devices simultaneously – laptops, tablets, smartphones, and specialized educational technology. This device density creates significant challenges for network design, requiring careful planning of access point placement, channel allocation, and bandwidth management.</p>
      
      <h3 class="text-xl font-bold mb-3">Beyond the Classroom</h3>
      <p class="mb-4">Effective Wi-Fi extends beyond classroom walls into libraries, study areas, auditoriums, and outdoor spaces. Students expect seamless connectivity across campus, enabling flexible study locations and supporting the modern, mobile learning experience.</p>
      
      <h3 class="text-xl font-bold mb-3">Security and Compliance</h3>
      <p class="mb-4">Educational institutions face unique security challenges, balancing open access with protection of sensitive student data and research information. Modern Wi-Fi solutions must provide robust security while maintaining the flexibility needed for diverse user groups.</p>
      
      <h3 class="text-xl font-bold mb-3">Future-Proofing Educational Infrastructure</h3>
      <p class="mb-4">As educational technology continues to evolve, Wi-Fi infrastructure must be designed for scalability and adaptability. From supporting IoT devices and AR/VR applications to enabling advanced analytics, the right foundation today will support tomorrow's innovations.</p>
      
      <h3 class="text-xl font-bold mb-3">Conclusion</h3>
      <p class="mb-4">Investing in robust, well-designed Wi-Fi infrastructure is no longer optional for educational institutions. It's a critical component of modern education, enabling the digital learning experiences that prepare students for success in an increasingly connected world.</p>
    `,
  },
  "infrastructure-services": {
    title: "Rethinking Infrastructure Services",
    date: "2026",
    author: "Collective IP Team",
    content: `
      <h2 class="text-2xl font-bold mb-4">The Infrastructure Evolution</h2>
      <p class="mb-4">Traditional infrastructure service delivery models are undergoing radical transformation. The shift from CapEx-heavy, on-premises solutions to flexible, consumption-based models is reshaping how organizations approach their IT infrastructure needs.</p>
      
      <h3 class="text-xl font-bold mb-3">From Ownership to Outcomes</h3>
      <p class="mb-4">The focus has moved from owning infrastructure to achieving business outcomes. Organizations increasingly care less about the specific technology and more about the results it delivers – scalability, reliability, security, and cost-effectiveness.</p>
      
      <h3 class="text-xl font-bold mb-3">The Hybrid Reality</h3>
      <p class="mb-4">Despite the cloud revolution, most organizations operate in hybrid environments. The challenge isn't choosing between cloud and on-premises, but optimizing the mix to meet specific business requirements around performance, compliance, cost, and capability.</p>
      
      <h3 class="text-xl font-bold mb-3">Automation as Standard</h3>
      <p class="mb-4">Manual infrastructure management is no longer viable at scale. Automation, from provisioning to monitoring to remediation, has become essential for maintaining reliability while controlling costs. Infrastructure as Code (IaC) practices are now standard rather than innovative.</p>
      
      <h3 class="text-xl font-bold mb-3">Security by Design</h3>
      <p class="mb-4">Security can no longer be bolted onto infrastructure after deployment. Modern infrastructure services must embed security throughout the lifecycle, from design through decommissioning, with zero-trust principles guiding architecture decisions.</p>
      
      <h3 class="text-xl font-bold mb-3">The Observability Imperative</h3>
      <p class="mb-4">As infrastructure complexity increases, comprehensive observability becomes critical. Organizations need deep insights into performance, usage patterns, and potential issues before they impact business operations.</p>
      
      <h3 class="text-xl font-bold mb-3">Sustainability Considerations</h3>
      <p class="mb-4">Environmental impact is now a key factor in infrastructure decisions. Energy efficiency, carbon footprint, and sustainable practices are influencing everything from data center design to cloud provider selection.</p>
      
      <h3 class="text-xl font-bold mb-3">The Partner Ecosystem</h3>
      <p class="mb-4">No single organization can master all aspects of modern infrastructure. Success depends on building strong partner ecosystems that bring specialized expertise while maintaining accountability for outcomes.</p>
      
      <h3 class="text-xl font-bold mb-3">Conclusion</h3>
      <p class="mb-4">The future of infrastructure services lies in flexibility, automation, security, and partnership. Organizations that embrace these principles while maintaining focus on business outcomes will be best positioned for success in an increasingly complex digital landscape.</p>
    `,
  },
};

export default function ResourcesPage() {
  const [selectedBlog, setSelectedBlog] = useState<
    (typeof blogContent)[keyof typeof blogContent] | null
  >(null);

  const openBlog = (blogId: string) => {
    setSelectedBlog(blogContent[blogId as keyof typeof blogContent]);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="font-body text-dark antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#3B4041]">
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-[#8B5CF6] text-[11px] text-base font-bold uppercase tracking-[0.2em] mb-4">
            Resources / Blogs
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 uppercase tracking-tight">
            Insights & Knowledge
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            Technical insights, case studies, and thought leadership from our
            team of experts.
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
              <div className="text-[#8B5CF6] text-xs font-bold uppercase tracking-wider mb-2">
                2026
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Why Good Wi-Fi Connectivity is Essential in Education
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Exploring the critical role of robust wireless infrastructure in
                modern educational environments and its impact on learning
                outcomes.
              </p>
              <button
                onClick={() => openBlog("wifi-education")}
                className="text-[#5C2882] text-sm font-bold hover:underline"
              >
                Read More →
              </button>
            </article>

            <article className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="text-[#8B5CF6] text-xs font-bold uppercase tracking-wider mb-2">
                2026
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Rethinking Infrastructure Services
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                How modern infrastructure approaches are transforming service
                delivery and enabling digital transformation across sectors.
              </p>
              <button
                onClick={() => openBlog("infrastructure-services")}
                className="text-[#5C2882] text-sm font-bold hover:underline"
              >
                Read More →
              </button>
            </article>
          </div>
        </div>
      </section>

      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-start">
              <div>
                <div className="text-[#8B5CF6] text-xs font-bold uppercase tracking-wider mb-2">
                  {selectedBlog.date}
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#3B4041] mb-2">
                  {selectedBlog.title}
                </h2>  
                <div className="text-slate-500 text-sm">
                  By {selectedBlog.author}
                </div>
              </div>
              <button
                onClick={closeBlog}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div
                className="prose prose-sm max-w-none text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
