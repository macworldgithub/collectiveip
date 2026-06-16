import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Linkedin, Mail } from "lucide-react";

const leadershipTeam = [
  {
    name: "James Carter",
    role: "Chief Executive Officer",
    image: "/images/leadership/ceo.png",
    bio: "James brings over 20 years of experience in the IT infrastructure sector, driving strategic growth and fostering an ecosystem of technology partners. His leadership ensures Collective IP remains at the forefront of network and cloud innovations.",
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    image: "/images/leadership/cto.png",
    bio: "With a deep background in hybrid cloud architecture and intelligent automation, Sarah leads the technical vision at Collective IP. She oversees the development of our security and networking frameworks, ensuring robust and scalable solutions.",
  },
  {
    name: "Michael Reynolds",
    role: "Chief Operating Officer",
    image: "/images/leadership/coo.png",
    bio: "Michael is responsible for operational excellence and project delivery. His pragmatic approach to channel-first engagements ensures that our partners and clients receive perfectly executed services from discovery to deployment.",
  },
];

export default function LeadershipPage() {
  return (
    <div className="font-body text-dark antialiased bg-white">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-[#3B4041]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#70309d]/20 to-transparent blur-3xl" />
          <div className="absolute bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[#937bbd]/10 to-transparent blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-300 font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Team
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6">
            Leadership Team
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Meet the experts guiding Collective IP's strategic vision and ensuring delivery excellence across our connectivity, cloud, and security practices.
          </p>
        </div>
      </section>

      {/* ─── LEADERSHIP PROFILES ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#70309d] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#3B4041] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#70309d] font-semibold text-sm uppercase tracking-wide mb-4">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {member.bio}
                </p>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#70309d] hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#70309d] hover:text-white transition-colors">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
