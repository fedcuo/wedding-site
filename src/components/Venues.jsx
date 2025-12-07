import React from "react";
import { Church, UtensilsCrossed, Navigation } from "lucide-react";

export const Venues = () => {
  const venues = [
    {
      icon: <Church className="w-10 h-10" />,
      title: "Cerimonia",
      time: "Ore 11:00",
      name: "Chiesa Madre di San Felice in Pincis",
      address: "Via Abate Felice Toscano, 2",
      city: "80038 Pomigliano d'Arco (NA)",
      mapsUrl: "https://maps.app.goo.gl/uCgwJzbc1NYVAADk7",
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10" />,
      title: "Ricevimento",
      time: "Ore 13:00",
      name: "Casale dei Baroni",
      address: "Viale Tenente Alberto Puoti, 29",
      city: "81028 Santa Maria a Vico (CE)",
      mapsUrl: "https://maps.app.goo.gl/cBW8HxGgvr7QNQqcA",
    },
  ];

  const openMaps = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="font-serif text-4xl md:text-5xl text-christmas-green text-center mb-4">
        Dove Festeggeremo
      </h2>
      <div className="w-16 h-0.5 bg-gold mx-auto mb-16"></div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
        {venues.map((venue, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-gold group relative z-10"
          >
            <div className="text-christmas-red mb-4 group-hover:scale-110 transition-transform duration-300">
              {venue.icon}
            </div>
            <h3 className="font-serif text-3xl text-christmas-green mb-2">
              {venue.title}
            </h3>
            <div className="text-christmas-red font-medium mb-4 text-lg">
              {venue.time}
            </div>
            <address className="not-italic text-charcoal leading-relaxed">
              <strong className="block mb-1">{venue.name}</strong>
              {venue.address}
              <br />
              {venue.city}
            </address>

            {/* Navigation Button - Small Bottom Right */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => openMaps(venue.mapsUrl)}
                className="bg-christmas-green text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-christmas-red transition-all duration-300 flex items-center gap-2 group/btn hover:scale-105"
              >
                <Navigation className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        ))}

        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <svg
            width="120"
            height="80"
            viewBox="0 0 120 80"
            className="opacity-30"
          >
            <path
              d="M 10 40 Q 35 20, 60 40 T 110 40"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeDasharray="8 6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 10 45 Q 35 25, 60 45 T 110 45"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="5 4"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <circle cx="30" cy="30" r="2" fill="#C41E3A" opacity="0.4" />
            <circle cx="60" cy="40" r="2.5" fill="#165B33" opacity="0.5" />
            <circle cx="90" cy="30" r="2" fill="#C41E3A" opacity="0.4" />
            <text x="55" y="25" fontSize="12" fill="#D4AF37" opacity="0.6">
              ♥
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};
