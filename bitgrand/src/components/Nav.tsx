import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { navLinks, contact } from '../lib/data';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="https://bit-grand.com/wp-content/uploads/2026/08/logo-bitgrand.png"
            alt="BITGRAND"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#FF8C00] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${contact.phoneRaw}`}
            className="flex items-center gap-2 text-white/90 hover:text-[#FF8C00] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">{contact.phone}</span>
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] px-5 py-2.5 rounded-full font-medium text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            واتساپ
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#FF8C00] transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${contact.phoneRaw}`}
              className="flex items-center gap-2 text-white/90 hover:text-[#FF8C00] transition-colors py-2"
            >
              <Phone className="w-4 h-4" />
              <span>{contact.phone}</span>
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] px-5 py-3 rounded-full font-medium text-white"
            >
              <MessageCircle className="w-4 h-4" />
              تماس در واتساپ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
