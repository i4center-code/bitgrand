import { useState, useEffect } from 'react';
import { toPersianNum } from '../lib/data';

interface PriceData {
  price: number;
  change24h: number;
}

export default function Hero() {
  const [priceData, setPriceData] = useState<PriceData>({ price: 0, change24h: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://iranfxapp.ir/price-json.php');
        if (response.ok) {
          const data = await response.json();
          setPriceData({
            price: data.usd_price || 0,
            change24h: data.usd_change_24h || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching price:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF8C00]/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4500]/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF8C00]/15 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Side - Brand */}
          <div className="text-right space-y-6">
            <img
              src="https://bit-grand.com/wp-content/uploads/2026/08/logo-bitgrand.png"
              alt="BITGRAND"
              className="h-20 w-auto mx-auto lg:mx-0 animate-float"
            />
            
            <h1 className="fiery-text text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              بیت گرند
            </h1>
            
            <p className="text-2xl md:text-3xl text-[#FF8C00] font-bold animate-pulse">
              ۱۷ سال اعتماد
            </p>
            
            <p className="text-white/80 text-lg md:text-xl max-w-md">
              بدون محدودیت در مبلغ خرید و فروش
            </p>
            
            <p className="text-white/60 text-base max-w-md leading-relaxed">
              پیشرو در خدمات صرافی ارز دیجیتال، انتقال پول بین‌المللی و مشاوره سرمایه‌گذاری با ۱۷ سال سابقه درخشان
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="glass-card p-4 rounded-2xl flex-1 min-w-[140px]">
                <p className="text-white/60 text-sm mb-1">حجم معاملات</p>
                <p className="fiery-text text-xl font-bold">{toPersianNum('۵۰+')} میلیارد تومان</p>
              </div>
              <div className="glass-card p-4 rounded-2xl flex-1 min-w-[140px]">
                <p className="text-white/60 text-sm mb-1">کاربران فعال</p>
                <p className="fiery-text text-xl font-bold">{toPersianNum('۱۰,۰۰۰+')}</p>
              </div>
            </div>
          </div>

          {/* Left Side - Live Price Chart */}
          <div className="relative">
            <div className="glass-card p-6 md:p-8 rounded-3xl glow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">$</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">USDT / Toman</h3>
                    <p className="text-white/60 text-sm">تتر به تومان</p>
                  </div>
                </div>
                {priceData.change24h >= 0 ? (
                  <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                    ▲ {toPersianNum(priceData.change24h.toFixed(2))}%
                  </span>
                ) : (
                  <span className="text-red-400 text-sm font-medium flex items-center gap-1">
                    ▼ {toPersianNum(Math.abs(priceData.change24h).toFixed(2))}%
                  </span>
                )}
              </div>

              {isLoading ? (
                <div className="h-48 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-[#FF8C00] border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <>
                  <div className="text-center py-8">
                    <p className="text-white/60 text-sm mb-2">قیمت لحظه‌ای</p>
                    <p className="fiery-text text-4xl md:text-5xl font-black">
                      {toPersianNum(priceData.price.toLocaleString())} <span className="text-lg">تومان</span>
                    </p>
                  </div>

                  {/* Animated Chart Placeholder */}
                  <div className="h-32 relative overflow-hidden">
                    <svg viewBox="0 0 400 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 Q50,70 100,50 T200,40 T300,60 T400,30 L400,100 L0,100 Z"
                        fill="url(#chartGradient)"
                        className="animate-pulse"
                      />
                      <path
                        d="M0,80 Q50,70 100,50 T200,40 T300,60 T400,30"
                        fill="none"
                        stroke="#FF8C00"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>

                  <p className="text-white/40 text-xs text-center mt-4">
                    آخرین بروزرسانی: {new Date().toLocaleTimeString('fa-IR')}
                  </p>
                </>
              )}
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full animate-float">
              <span className="text-[#FF8C00] text-sm font-medium">زنده 🔴</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
