const stats = [
  { value: "2000+", label: "Projects Completed" },
  { value: "4", label: "Core Practices" },
  { value: "250+", label: "Team Members" },
  { value: "98%", label: "Customer Retention" },
];

export default function Stats() {
  return (
    <section className="bg-[#3D4243] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-heading text-2xl lg:text-5xl font-bold text-brand-300 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-200 text-sm font-semibold tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
