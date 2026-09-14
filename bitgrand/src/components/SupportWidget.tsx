import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { contact } from '../lib/data';

export default function SupportWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center hover:scale-110 transition-all animate-float"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 glass-card p-4 rounded-2xl w-72 animate-fade-in">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <h3 className="text-white font-bold">پشتیبانی آنلاین</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-green-500/20 hover:bg-green-500/30 transition-colors group"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">واتساپ</p>
                <p className="text-white/60 text-xs">پاسخگویی سریع</p>
              </div>
            </a>

            {/* Bale */}
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">بله</p>
                <p className="text-white/60 text-xs">{contact.bale}</p>
              </div>
            </a>
          </div>

          <p className="text-white/40 text-xs mt-4 text-center">
            پشتیبانی ۲۴ ساعته در ۷ روز هفته
          </p>
        </div>
      )}
    </>
  );
}
