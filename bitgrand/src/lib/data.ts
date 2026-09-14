// Helper function to convert English numerals to Persian
export const toPersianNum = (num: number | string): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

// Navigation links with keys for i18n
export const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
];

// Services data
export const services = [
  {
    icon: 'Bitcoin',
    titleKey: 'services.otcTitle',
    descKey: 'services.otcDesc',
  },
  {
    icon: 'Send',
    titleKey: 'services.transferTitle',
    descKey: 'services.transferDesc',
  },
  {
    icon: 'Globe',
    titleKey: 'services.swiftTitle',
    descKey: 'services.swiftDesc',
  },
  {
    icon: 'UserCheck',
    titleKey: 'services.kycTitle',
    descKey: 'services.kycDesc',
  },
  {
    icon: 'Image',
    titleKey: 'services.nftTitle',
    descKey: 'services.nftDesc',
  },
  {
    icon: 'MessageSquare',
    titleKey: 'services.consultationTitle',
    descKey: 'services.consultationDesc',
  },
];

// Countries in global network
export const countries = ['امارات', 'ترکیه', 'اسپانیا', 'چین', 'هنگ‌کنگ', 'کانادا', 'روسیه'];

// Why Us section
export const whyUs = [
  {
    titleKey: 'whyUs.speed',
    descKey: 'whyUs.speedDesc',
  },
  {
    titleKey: 'whyUs.security',
    descKey: 'whyUs.securityDesc',
  },
  {
    titleKey: 'whyUs.transparency',
    descKey: 'whyUs.transparencyDesc',
  },
  {
    titleKey: 'whyUs.trust',
    descKey: 'whyUs.trustDesc',
  },
];

// Testimonials
export const testimonials = [
  {
    name: 'محمد رضایی',
    role: 'تاجر بین‌المللی',
    text: 'بیت گرند بهترین همراه من در معاملات ارزی بوده. سرعت و امنیت بی‌نظیری دارند.',
  },
  {
    name: 'سارا احمدی',
    role: 'سرمایه‌گذار کریپتو',
    text: 'مشاوره‌های تخصصی بیت گرند کمک کرد سرمایه‌گذاری موفقی در NFT داشته باشم.',
  },
  {
    name: 'علی کریمی',
    role: 'صاحب کسب‌وکار',
    text: 'برای انتقال پول به ترکیه همیشه از بیت گرند استفاده می‌کنم. بسیار مطمئن هستند.',
  },
  {
    name: 'مریم حسینی',
    role: 'فریلنسر',
    text: 'دریافت درآمد دلاری من با خدمات بیت گرند خیلی راحت‌تر شده است.',
  },
];

// FAQs
export const faqs = [
  { qKey: 'faq.q1', aKey: 'faq.a1' },
  { qKey: 'faq.q2', aKey: 'faq.a2' },
  { qKey: 'faq.q3', aKey: 'faq.a3' },
  { qKey: 'faq.q4', aKey: 'faq.a4' },
  { qKey: 'faq.q5', aKey: 'faq.a5' },
  { qKey: 'faq.q6', aKey: 'faq.a6' },
];

// Social media links
export const socials = [
  { name: 'Instagram', url: 'https://instagram.com/bitgrand', icon: 'Instagram' },
  { name: 'Twitter', url: 'https://twitter.com/bitgrand', icon: 'Twitter' },
  { name: 'WhatsApp', url: 'https://wa.me/989353810897', icon: 'Whatsapp' },
];

// Contact information
export const contact = {
  phone: '۰۲۱-۲۸۴۲۳۲۱۷',
  phoneRaw: '021-28423217',
  whatsapp: '989353810897',
  bale: '@bitgrand',
  address: 'تهران، خیابان ولیعصر، برج تجارت، طبقه ۱۲',
};
