const stats = [
  { value: "150+", label: "Deployments Delivered" },
  { value: "6", label: "Core Practices" },
  { value: "20+", label: "Years Combined Experience" },
  { value: "100%", label: "Channel Focused" },
];

export default function Stats() {
  return (
    <section className="bg-[#3D4243] py-10">
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

