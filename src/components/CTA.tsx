import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
          Get Started
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Expand Your Capabilities?
        </h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Whether you're looking to expand your services portfolio, improve delivery efficiency, or
          explore intelligent automation — we're here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition-colors duration-200 text-lg"
          >
            Get in Touch
            <ArrowRight size={20} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-md hover:border-sky-500 hover:text-sky-600 transition-colors duration-200 text-lg"
          >
            Explore Our Tools
          </a>
        </div>
      </div>
    </section>
  );
}
