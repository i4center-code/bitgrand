import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fa' | 'en';
export type Theme = 'dark' | 'light';

interface I18nContextType {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
  toPersianNum: (num: number | string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const translations = {
  fa: {
    nav: {
      home: "خانه",
      services: "خدمات",
      about: "درباره ما",
      contact: "تماس",
      whatsapp: "واتساپ"
    },
    hero: {
      trust: "۱۷ سال اعتماد",
      title1: "بدون محدودیت در مبلغ",
      title2: "خرید و فروش",
      description: "خدمات تخصصی خرید و فروش رمز ارز، حواله بین المللی و مشاوره سرمایه گذاری",
      requestBuy: "درخواست خرید",
      viewServices: "مشاهده خدمات",
      usdtPrice: "قیمت لحظه‌ای USDT",
      volume: "حجم معاملات",
      activeUsers: "کاربران فعال"
    },
    comparison: {
      bitgrandTitle: "صرافی با حجم خرید و فروش بالا",
      bitgrandSubtitle: "+۱۰ BTC در هر معامله",
      competitorsTitle: "صرافی‌های خرد",
      vs: "در مقابل",
      unlimited: "بدون محدودیت",
      instantSettlement: "تسویه فوری",
      wholesalePrice: "قیمت عمده",
      limitConstraint: "محدودیت سقف معامله",
      slowSettlement: "تسویه کندتر",
      retailPrice: "قیمت خرده",
      nobitex: "نوبیتکس",
      ramzinex: "رمزینکس",
      abantether: "آبان‌تتر"
    },
    services: {
      title: "خدمات ما",
      subtitle: "خدمات تخصصی در زمینه رمز ارز، حواله بین المللی و مشاوره سرمایه گذاری",
      otcTitle: "معاملات اوراق بهادار رمز ارز",
      otcDesc: "خرید و فروش مستقیم رمز ارز با قیمت مناسب و تضمین تحویل",
      transferTitle: "حواله بین‌المللی",
      transferDesc: "انتقال سریع و ایمن سرمایه به سراسر جهان",
      swiftTitle: "خدمات سوئیفت",
      swiftDesc: "خدمات بانکی بین‌المللی با کارمزد پایین",
      kycTitle: "کارشناسی KYC برای Binance",
      kycDesc: "راهنمایی و کمک برای تکمیل فرآیند شناسایی",
      nftTitle: "مشاوره NFT",
      nftDesc: "مشاوره در زمینه خرید، فروش و ساخت NFT",
      consultationTitle: "مشاوره سرمایه‌گذاری",
      consultationDesc: "مشاوره حرفه‌ای در زمینه سرمایه‌گذاری در رمز ارزها"
    },
    globalNetwork: {
      title: "شبکه جهانی",
      subtitle: "خدمات ما در سراسر جهان با پوشش گسترده و شبکه بین المللی",
      countries: ["امارات", "ترکیه", "اسپانیا", "چین", "هنگ‌کنگ", "کانادا", "روسیه"]
    },
    whyUs: {
      title: "چرا بیت گرند؟",
      subtitle: "با بیش از ۱۷ سال تجربه، ما اولویت اصلی خود را رضایت مشتریان قرار داده‌ایم",
      speed: "سرعت",
      speedDesc: "پردازش سریع تراکنش‌ها بدون تاخیر",
      security: "امنیت",
      securityDesc: "سیستم‌های امنیتی پیشرفته برای محافظت از دارایی‌ها",
      transparency: "شفافیت",
      transparencyDesc: "همه‌ی تراکنش‌ها به صورت کاملاً شفاف ثبت می‌شوند",
      trust: "۱۷ سال اعتماد",
      trustDesc: "سابقه‌ی طولانی در خدمات مالی و ارزی",
      contactUs: "تماس با ما",
      satisfaction: "۱۰۰٪ رضایت مشتریان"
    },
    articles: {
      title: "مجله و اخبار بیت‌گرند",
      subtitle: "آخرین مقالات و اخبار بازار ارز دیجیتال",
      readMore: "ادامه مطلب"
    },
    testimonials: {
      title: "نظرات مشتریان",
      subtitle: "اعتماد مشتریان ما، بزرگترین دستاورد ما است"
    },
    faq: {
      title: "سوالات متداول",
      subtitle: "پاسخ سوالات متداول شما درباره خدمات ما",
      q1: "حداقل مقدار معامله چقدر است؟",
      a1: "حداقل مقدار معامله برای خرید و فروش رمز ارز بدون محدودیت می‌باشد.",
      q2: "چه رمز ارزهایی پشتیبانی می‌شود؟",
      a2: "ما تمام رمز ارزهای اصلی از جمله بیت کوین، اتریوم، USDT و بیش از ۱۰۰ رمز ارز دیگر را پشتیبانی می‌کنیم.",
      q3: "چه مدارکی برای تأیید هویت لازم است؟",
      a3: "برای معاملات بالای ۵۰ میلیون تومان نیاز به کارت ملی و کد ملی می‌باشد.",
      q4: "زمان تحویل رمز ارز چقدر است؟",
      a4: "معمولاً تحویل رمز ارز در کمتر از ۳۰ دقیقه صورت می‌گیرد.",
      q5: "آیا خدمات بین‌المللی ارائه می‌دهید؟",
      a5: "بله، ما خدمات بین‌المللی شامل حواله SWIFT و خرید رمز ارز از بازارهای جهانی ارائه می‌دهیم.",
      q6: "چطور می‌توانم تماس بگیرم؟",
      a6: "می‌توانید با شماره ۰۲۱-۲۸۴۲۳۲۱۷ تماس بگیرید یا از طریق واتساپ با ما در ارتباط باشید."
    },
    cta: {
      title: "آماده‌اید که با بیت گرند کار کنید؟",
      subtitle: "با بیش از ۱۷ سال تجربه، ما بهترین خدمات را برای شما فراهم می‌کنیم",
      callButton: "تماس با ما: ۰۲۱-۲۸۴۲۳۲۱۷",
      whatsappButton: "واتساپ"
    },
    footer: {
      description: "خدمات تخصصی خرید و فروش رمز ارز، حواله بین المللی و مشاوره سرمایه گذاری با بیش از ۱۷ سال سابقه",
      quickLinks: "لینک‌های سریع",
      contact: "تماس با ما",
      phone: "تلفن: ۰۲۱-۲۸۴۲۳۲۱۷",
      whatsapp: "واتساپ: ۹۸۹۳۵۳۸۱۰۸۹۷",
      address: "آدرس: تهران، خیابان ولیعصر، پلاک ...",
      copyright: "© ۲۰۲۴ BITGRAND. تمامی حقوق محفوظ است."
    },
    support: {
      title: "پشتیبانی",
      whatsapp: "واتساپ",
      bale: "بال"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      whatsapp: "WhatsApp"
    },
    hero: {
      trust: "17 Years of Trust",
      title1: "No Limit on Amount",
      title2: "Buy & Sell",
      description: "Specialized services in cryptocurrency trading, international transfers, and investment consulting",
      requestBuy: "Request Purchase",
      viewServices: "View Services",
      usdtPrice: "Live USDT Price",
      volume: "Trading Volume",
      activeUsers: "Active Users"
    },
    comparison: {
      bitgrandTitle: "High Volume Exchange",
      bitgrandSubtitle: "+10 BTC per transaction",
      competitorsTitle: "Small Exchanges",
      vs: "VS",
      unlimited: "No limits",
      instantSettlement: "Instant settlement",
      wholesalePrice: "Wholesale price",
      limitConstraint: "Transaction limits",
      slowSettlement: "Slower settlement",
      retailPrice: "Retail price",
      nobitex: "Nobitex",
      ramzinex: "Ramzinex",
      abantether: "AbanTether"
    },
    services: {
      title: "Our Services",
      subtitle: "Specialized services in cryptocurrency, international transfers, and investment consulting",
      otcTitle: "OTC Crypto Trading",
      otcDesc: "Direct cryptocurrency trading with competitive prices and guaranteed delivery",
      transferTitle: "International Money Transfer",
      transferDesc: "Fast and secure capital transfer worldwide",
      swiftTitle: "SWIFT Services",
      swiftDesc: "International banking services with low fees",
      kycTitle: "KYC Verification for Binance",
      kycDesc: "Guidance and assistance for identity verification process",
      nftTitle: "NFT Consulting",
      nftDesc: "Consulting on NFT buying, selling, and creation",
      consultationTitle: "Investment Consulting",
      consultationDesc: "Professional consulting on cryptocurrency investments"
    },
    globalNetwork: {
      title: "Global Network",
      subtitle: "Our services worldwide with extensive coverage and international network",
      countries: ["UAE", "Turkey", "Spain", "China", "Hong Kong", "Canada", "Russia"]
    },
    whyUs: {
      title: "Why BITGRAND?",
      subtitle: "With over 17 years of experience, we prioritize customer satisfaction",
      speed: "Speed",
      speedDesc: "Fast transaction processing without delays",
      security: "Security",
      securityDesc: "Advanced security systems to protect your assets",
      transparency: "Transparency",
      transparencyDesc: "All transactions are recorded completely transparently",
      trust: "17 Years of Trust",
      trustDesc: "Long history in financial and currency services",
      contactUs: "Contact Us",
      satisfaction: "100% Customer Satisfaction"
    },
    articles: {
      title: "BITGRAND Magazine & News",
      subtitle: "Latest articles and cryptocurrency market news",
      readMore: "Read More"
    },
    testimonials: {
      title: "Customer Testimonials",
      subtitle: "Our customers' trust is our greatest achievement"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions about our services",
      q1: "What is the minimum trade amount?",
      a1: "There is no minimum limit for cryptocurrency trading.",
      q2: "Which cryptocurrencies are supported?",
      a2: "We support all major cryptocurrencies including Bitcoin, Ethereum, USDT, and over 100 others.",
      q3: "What documents are required for identity verification?",
      a3: "For trades above 50 million Tomans, national ID and code are required.",
      q4: "How long does cryptocurrency delivery take?",
      a4: "Cryptocurrency delivery usually takes less than 30 minutes.",
      q5: "Do you provide international services?",
      a5: "Yes, we provide international services including SWIFT transfers and global crypto purchases.",
      q6: "How can I contact you?",
      a6: "You can call 021-28423217 or contact us via WhatsApp."
    },
    cta: {
      title: "Ready to work with BITGRAND?",
      subtitle: "With over 17 years of experience, we provide the best services for you",
      callButton: "Call Us: 021-28423217",
      whatsappButton: "WhatsApp"
    },
    footer: {
      description: "Specialized services in cryptocurrency trading, international transfers, and investment consulting with over 17 years of experience",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      phone: "Phone: 021-28423217",
      whatsapp: "WhatsApp: +98 935 381 0897",
      address: "Address: Tehran, Valiasr Street, No. ...",
      copyright: "© 2024 BITGRAND. All rights reserved."
    },
    support: {
      title: "Support",
      whatsapp: "WhatsApp",
      bale: "Bale"
    }
  }
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fa');
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const savedLang = localStorage.getItem('bitgrand-lang') as Language;
    const savedTheme = localStorage.getItem('bitgrand-theme') as Theme;
    
    if (savedLang) {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === 'fa' ? 'rtl' : 'ltr';
    }
    
    if (savedTheme) {
      setThemeState(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bitgrand-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('bitgrand-theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const toPersianNum = (num: number | string): string => {
    if (language === 'en') {
      return num.toString();
    }
    
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (x) => persianDigits[parseInt(x)]);
  };

  return (
    <I18nContext.Provider value={{ language, theme, setLanguage, setTheme, t, toPersianNum }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
