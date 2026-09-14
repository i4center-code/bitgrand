import { testimonials } from '../lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF8C00]/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fiery-text text-3xl md:text-4xl font-black mb-4">نظرات مشتریان</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            آنچه مشتریان ما درباره خدمات بیت گرند می‌گویند
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:glow transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C00] to-[#FF4500] rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </span>
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mb-4 text-center">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="text-white font-bold text-sm">{testimonial.name}</p>
                <p className="text-[#FF8C00] text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
