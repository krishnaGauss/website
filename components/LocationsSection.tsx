"use client";

import WorldMap from "@/components/ui/world-map";

const L = {
  burundi:     { lat: -3.3731,  lng: 29.9189  },
  burkinaFaso: { lat: 12.3640,  lng: -1.5330  },
  uganda:      { lat: 1.3733,   lng: 32.2903  },
  noida:       { lat: 28.5355,  lng: 77.3910  },
  mumbai:      { lat: 19.0760,  lng: 72.8777  },
  uae:         { lat: 25.2048,  lng: 55.2708  },
  usa:         { lat: 40.7128,  lng: -74.0060 },
  melbourne:   { lat: -37.8136, lng: 144.9631 },
  china:       { lat: 39.9042,  lng: 116.4074 },
  haifa:       { lat: 32.7940,  lng: 34.9896  },
  tanzania:    { lat: -6.3690,  lng: 34.8888  },
};

const dots = [
  { start: L.usa,         end: L.uae       },
  { start: L.burkinaFaso, end: L.uae       },
  { start: L.burundi,     end: L.tanzania  },
  { start: L.tanzania,    end: L.uae       },
  { start: L.uganda,      end: L.uae       },
  { start: L.haifa,       end: L.uae       },
  { start: L.uae,         end: L.noida     },
  { start: L.uae,         end: L.mumbai    },
  { start: L.noida,       end: L.china     },
  { start: L.china,       end: L.melbourne },
];

const fadeLeft   = { background: 'linear-gradient(to right,  #ffffff, transparent)' } as const;
const fadeTop    = { background: 'linear-gradient(to bottom, #ffffff, transparent)' } as const;
const fadeBottom = { background: 'linear-gradient(to top,    #ffffff, transparent)' } as const;

export default function LocationsSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[60vh] lg:flex lg:items-center">

      {/* ── Desktop: map as absolute right-aligned background ── */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[65%] pointer-events-none select-none">
        <div className="absolute left-0 top-0 h-full w-48 z-10" style={fadeLeft} />
        <div className="absolute inset-x-0 top-0 h-16 z-10"    style={fadeTop} />
        <div className="absolute inset-x-0 bottom-0 h-16 z-10" style={fadeBottom} />
        <WorldMap dots={dots} lineColor="#f97316" />
      </div>

      {/* ── Text (shared) ── */}
      <div className="relative z-10 flex flex-col gap-4 px-4 sm:px-6 lg:px-16 pt-12 pb-4 lg:py-16 w-full lg:max-w-[48%]">
        <span className="text-[#E8521A] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight">
          Global Presence
        </span>
        <p className="text-gray-500 text-sm sm:text-base font-semibold leading-relaxed max-w-xs sm:max-w-sm">
          Our global network enables seamless logistics solutions, connecting
          your business to new opportunities worldwide.
        </p>
      </div>

      {/* ── Mobile: map in document flow, below text ── */}
      <div className="lg:hidden relative w-full pb-10 pointer-events-none select-none">
        <div className="absolute inset-x-0 top-0 h-10 z-10"    style={fadeTop} />
        <div className="absolute inset-x-0 bottom-10 h-10 z-10" style={fadeBottom} />
        <WorldMap dots={dots} lineColor="#f97316" />
      </div>

    </section>
  );
}
