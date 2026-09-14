import { countries } from '../lib/data';

// Country coordinates for map (approximate percentages)
const countryCoords: Record<string, { top: string; left: string }> = {
  'امارات': { top: '55%', left: '62%' },
  'ترکیه': { top: '35%', left: '58%' },
  'اسپانیا': { top: '32%', left: '45%' },
  'چین': { top: '38%', left: '75%' },
  'هنگ‌کنگ': { top: '48%', left: '78%' },
  'کانادا': { top: '25%', left: '20%' },
  'روسیه': { top: '20%', left: '65%' },
};

export default function GlobalNetwork() {
  return (
    <section id="network" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00]/5 to-[#FF4500]/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fiery-text text-3xl md:text-4xl font-black mb-4">شبکه جهانی</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            حضور فعال در ۷ کشور جهان برای ارائه خدمات سریع‌تر و مطمئن‌تر
          </p>
        </div>

        {/* World Map */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl glass-card overflow-hidden">
          {/* Simplified World Map SVG */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full opacity-30"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8C00" />
                <stop offset="100%" stopColor="#FF4500" />
              </linearGradient>
            </defs>
            
            {/* Simplified continents */}
            <path
              d="M150,120 Q200,100 250,120 T350,130 L380,180 Q350,220 300,200 T200,180 Q150,160 150,120 Z"
              fill="url(#mapGradient)"
              opacity="0.6"
            />
            <path
              d="M400,100 Q450,80 500,90 T580,100 L600,150 Q550,180 500,160 T420,140 Q400,120 400,100 Z"
              fill="url(#mapGradient)"
              opacity="0.6"
            />
            <path
              d="M620,120 Q700,100 780,110 T880,130 L900,180 Q850,220 780,200 T680,180 Q620,160 620,120 Z"
              fill="url(#mapGradient)"
              opacity="0.6"
            />
            <path
              d="M700,220 Q750,200 800,210 T880,230 L900,280 Q850,320 780,300 T720,280 Q700,260 700,220 Z"
              fill="url(#mapGradient)"
              opacity="0.6"
            />
            <path
              d="M200,280 Q280,260 350,270 T420,290 L440,340 Q380,380 320,360 T240,340 Q200,320 200,280 Z"
              fill="url(#mapGradient)"
              opacity="0.6"
            />
          </svg>

          {/* Pulsing Dots for Countries */}
          {countries.map((country) => {
            const coords = countryCoords[country];
            if (!coords) return null;
            
            return (
              <div
                key={country}
                className="absolute group cursor-pointer"
                style={{ top: coords.top, left: coords.left }}
              >
                {/* Pulsing Dot */}
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] rounded-full animate-pulse-glow" />
                  <div className="absolute inset-0 w-4 h-4 bg-[#FF8C00]/30 rounded-full animate-ping" />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <div className="glass px-3 py-1.5 rounded-lg text-sm font-medium text-white">
                      {country}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="glass px-4 py-2 rounded-xl">
              <span className="text-white/60 text-sm">کشورهای تحت پوشش:</span>
              <span className="text-[#FF8C00] font-bold mr-2">{countries.length}</span>
            </div>
          </div>
        </div>

        {/* Country List */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {countries.map((country) => (
            <span
              key={country}
              className="glass-card px-4 py-2 rounded-full text-white/80 text-sm hover:text-[#FF8C00] transition-colors cursor-default"
            >
              {country}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
