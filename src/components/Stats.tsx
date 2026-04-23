const stats = [
  { value: '150+', label: 'Deployments Delivered' },
  { value: '6', label: 'Core Practices' },
  { value: '20+', label: 'Years Combined Experience' },
  { value: '100%', label: 'Channel Focused' },
];

export default function Stats() {
  return (
    <section className="bg-sky-600 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sky-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
