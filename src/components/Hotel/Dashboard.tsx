import React, { useState } from "react";
import { Star, Sparkles, Coffee, Heart, Car, Wifi, Wine } from "lucide-react";

export default function Dashboard() {
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState(2);

  // Dynamic Data
  const features = [
    {
      icon: "🏠",
      title: "Room Configurator",
      desc: "AI-personalised stays",
      color: "border-brand-500 bg-brand-950/20",
    },
    { icon: "❤️", title: "Guest Journey", desc: "End-to-end AI experience" },
    { icon: "📈", title: "Revenue Intelligence", desc: "Dynamic pricing AI" },
    { icon: "👑", title: "AI Concierge", desc: "Predictive service" },
  ];

  const rooms = [
    {
      title: "Deluxe King",
      size: "35m² • Up to 2 guests",
      price: 289,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    },
    {
      title: "Executive Suite",
      size: "55m² • Up to 2 guests",
      price: 459,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
    },
    {
      title: "Penthouse Suite",
      size: "120m² • Up to 4 guests",
      price: 1250,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
    },
    {
      title: "Family Grand",
      size: "65m² • Up to 4 guests",
      price: 389,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba8a3e9f7?w=600",
    },
  ];

  const addons = [
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Full English Breakfast",
      price: 35,
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Spa & Wellness Package",
      price: 120,
    },
    {
      icon: <Wine className="w-5 h-5" />,
      title: "Fine Dining Experience",
      price: 95,
    },
    { icon: <Car className="w-5 h-5" />, title: "Airport Transfer", price: 75 },
    {
      icon: <Wine className="w-5 h-5" />,
      title: "Champagne & Flowers",
      price: 65,
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "Premium WiFi & Workspace",
      price: 25,
    },
  ];

  const selectedRoom = rooms[0]; // Default selected

  const total = selectedRoom.price * nights;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl border border-zinc-800 hover:border-brand-500 transition-all ${i === 0 ? feature.color : "bg-zinc-900/50"}`}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Room Selection Grid */}
        <div className="mb-10">
          <h2 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-white mb-6">Featured Rooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, i) => (
              <div
                key={i}
                className={`group rounded-3xl overflow-hidden border transition-all cursor-pointer ${
                  i === 0
                    ? "border-brand-500 ring-1 ring-brand-500"
                    : "border-zinc-800 hover:border-brand-500/50"
                }`}
              >
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {room.rating}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-1">{room.title}</h3>
                  <p className="text-sm text-zinc-400 mb-3">{room.size}</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-2xl font-bold">£{room.price}</span>
                      <span className="text-zinc-400 text-sm">/night</span>
                    </div>
                    <button className="text-xs px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configure Your Stay */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8">
              <h3 className="uppercase tracking-widest text-sm text-brand-300 mb-6 font-heading">
                CONFIGURE YOUR STAY
              </h3>

              <div className="grid grid-cols-2 gap-8">
                {/* Nights */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-3">
                    NIGHTS
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setNights(Math.max(1, nights - 1))}
                      className="w-12 h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-xl font-light transition"
                    >
                      −
                    </button>
                    <span className="text-4xl font-semibold w-12 text-center">
                      {nights}
                    </span>
                    <button
                      onClick={() => setNights(nights + 1)}
                      className="w-12 h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-xl font-light transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-3">
                    GUESTS
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-12 h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-xl font-light transition"
                    >
                      −
                    </button>
                    <span className="text-4xl font-semibold w-12 text-center">
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests(guests + 1)}
                      className="w-12 h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-xl font-light transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhance Your Experience */}
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8">
              <h3 className="uppercase tracking-widest text-sm text-brand-300 mb-6 font-heading">
                ENHANCE YOUR EXPERIENCE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addons.map((addon, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-zinc-950/50 border border-zinc-800 rounded-2xl hover:border-brand-500/50 transition-all cursor-pointer"
                  >
                    <div className="text-brand-300">{addon.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium">{addon.title}</p>
                      <p className="text-sm text-emerald-400">
                        £{addon.price}/night
                      </p>
                    </div>
                    <button className="text-xs px-5 py-2 bg-white/5 hover:bg-white/10 rounded-full transition">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-brand-500/30 rounded-3xl p-8 sticky top-6">
              <h3 className="uppercase tracking-widest text-sm text-brand-300 mb-6 font-heading">
                BOOKING SUMMARY
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">{selectedRoom.title}</p>
                    <p className="text-sm text-zinc-400">
                      £{selectedRoom.price} × {nights} nights
                    </p>
                  </div>
                  <p className="font-bold text-xl">£{total}</p>
                </div>

                <div className="h-px bg-zinc-800" />

                <div>
                  <p className="text-sm text-zinc-400">Total</p>
                  <p className="text-4xl font-bold text-brand-300">£{total}</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    {nights} nights • {guests} guests
                  </p>
                </div>

                <button className="w-full bg-brand-600 hover:bg-brand-700 py-4 rounded-2xl font-bold text-lg text-white transition-all active:scale-95">
                  Book Now
                </button>

                <div className="text-center text-xs text-brand-300 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI suggests: Add breakfast for 23% savings vs. à la carte
                  dining
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
