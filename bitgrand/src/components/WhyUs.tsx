import { CheckCircle } from 'lucide-react';
import { whyUs } from '../lib/data';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fiery-text text-3xl md:text-4xl font-black mb-4">چرا بیت گرند؟</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            دلایلی که هزاران مشتری به ما اعتماد کرده‌اند
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="glass-card p-2 rounded-3xl overflow-hidden glow">
              <img
                src="https://images.unsplash.com/photo-1621504450168-b8c4375361b9?w=600&h=400&fit=crop"
                alt="Crypto Trading"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl animate-float">
              <p className="text-[#FF8C00] text-3xl font-black">۱۷+</p>
              <p className="text-white/60 text-sm">سال تجربه</p>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-6 order-1 lg:order-2">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 glass-card p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
