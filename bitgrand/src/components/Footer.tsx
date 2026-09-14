import { Camera, Bird, MessageCircle, MapPin, Phone } from 'lucide-react';
import { navLinks, socials, contact } from '../lib/data';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="https://bit-grand.com/wp-content/uploads/2026/08/logo-bitgrand.png"
              alt="BITGRAND"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              بیت گرند، پیشرو در خدمات صرافی ارز دیجیتال و انتقال پول بین‌المللی با ۱۷ سال سابقه درخشان و رضایت هزاران مشتری.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon === 'Instagram' ? Camera : social.icon === 'Twitter' ? Bird : MessageCircle;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF8C00] hover:to-[#FF4500] transition-all group"
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">دسترسی سریع</h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#FF8C00] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">اطلاعات تماس</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-1">تلفن تماس</p>
                  <a href={`tel:${contact.phoneRaw}`} className="text-white font-medium hover:text-[#FF8C00] transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-1">واتساپ</p>
                  <a href={`https://wa.me/${contact.whatsapp}`} className="text-white font-medium hover:text-[#FF8C00] transition-colors">
                    +۹۸ {contact.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-1">آدرس</p>
                  <p className="text-white text-sm">{contact.address}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">خدمات اصلی</h3>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">معاملات OTC ارز دیجیتال</li>
              <li className="text-white/60 text-sm">انتقال پول بین‌المللی</li>
              <li className="text-white/60 text-sm">خدمات SWIFT</li>
              <li className="text-white/60 text-sm">احراز هویت بایننس</li>
              <li className="text-white/60 text-sm">مشاوره NFT و سرمایه‌گذاری</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © ۲۰۲۴ BITGRAND. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-[#FF8C00] transition-colors text-sm">
              قوانین و مقررات
            </a>
            <a href="#" className="text-white/40 hover:text-[#FF8C00] transition-colors text-sm">
              حریم خصوصی
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
