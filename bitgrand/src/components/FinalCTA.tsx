import { Phone, MessageCircle } from 'lucide-react';
import { contact } from '../lib/data';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Fiery Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] to-[#FF4500]" />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
            <Phone className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            همین حالا تماس بگیرید
          </h2>
          
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            تیم متخصص بیت گرند آماده ارائه مشاوره رایگان و پاسخگویی به سوالات شماست.
            <br />
            با ما تماس بگیرید یا در واتساپ پیام دهید.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="flex items-center justify-center gap-3 bg-white text-[#FF8C00] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {contact.phone}
            </a>
            
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              تماس در واتساپ
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-white/60 text-sm mt-8">
            پشتیبانی ۲۴ ساعته در ۷ روز هفته
          </p>
        </div>
      </div>
    </section>
  );
}
