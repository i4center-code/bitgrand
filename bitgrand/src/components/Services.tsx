import {
  Bitcoin,
  Send,
  Globe,
  UserCheck,
  Image,
  MessageSquare,
} from 'lucide-react';
import { services } from '../lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bitcoin,
  Send,
  Globe,
  UserCheck,
  Image,
  MessageSquare,
};

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fiery-text text-3xl md:text-4xl font-black mb-4">خدمات ما</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            ارائه دهنده جامع‌ترین خدمات مالی و ارزی دیجیتال با بالاترین استانداردهای جهانی
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Bitcoin;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:glow transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF8C00] to-[#FF4500] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
