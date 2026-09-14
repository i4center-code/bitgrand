// Helper function to convert English numerals to Persian
export const toPersianNum = (num: number | string): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

// Navigation links
export const navLinks = [
  { label: 'خانه', href: '#home' },
  { label: 'خدمات', href: '#services' },
  { label: 'شبکه جهانی', href: '#network' },
  { label: 'چرا ما', href: '#why-us' },
  { label: 'نظرات', href: '#testimonials' },
  { label: 'سوالات متداول', href: '#faq' },
  { label: 'تماس', href: '#contact' },
];

// Services data
export const services = [
  {
    icon: 'Bitcoin',
    title: 'معاملات OTC ارز دیجیتال',
    desc: 'خرید و فروش بدون محدودیت در مبلغ با بهترین نرخ بازار',
  },
  {
    icon: 'Send',
    title: 'انتقال پول بین‌المللی',
    desc: 'حواله ارزی سریع و امن به سراسر جهان',
  },
  {
    icon: 'Globe',
    title: 'خدمات SWIFT',
    desc: 'انتقال وجه بانکی از طریق شبکه سوئیفت',
  },
  {
    icon: 'UserCheck',
    title: 'احراز هویت بایننس',
    desc: 'انجام KYC برای صرافی بایننس و سایر پلتفرم‌ها',
  },
  {
    icon: 'Image',
    title: 'مشاوره NFT',
    desc: 'راهنمایی تخصصی برای سرمایه‌گذاری در NFT',
  },
  {
    icon: 'MessageSquare',
    title: 'مشاوره سرمایه‌گذاری',
    desc: 'مشاوره حرفه‌ای برای سرمایه‌گذاری در کریپتو',
  },
];

// Countries in global network
export const countries = ['امارات', 'ترکیه', 'اسپانیا', 'چین', 'هنگ‌کنگ', 'کانادا', 'روسیه'];

// Why Us section
export const whyUs = [
  {
    title: 'سرعت بالا',
    desc: 'انجام تراکنش‌ها در کمترین زمان ممکن',
  },
  {
    title: 'امنیت تضمین شده',
    desc: 'استفاده از پیشرفته‌ترین پروتکل‌های امنیتی',
  },
  {
    title: 'شفافیت کامل',
    desc: 'کارمزدها و نرخ‌ها کاملاً شفاف اعلام می‌شود',
  },
  {
    title: '۱۷ سال اعتماد',
    desc: 'سابقه درخشان و رضایت هزاران مشتری',
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
  {
    q: 'حداقل مبلغ برای معاملات OTC چقدر است؟',
    a: 'برای معاملات OTC هیچ محدودیت حداقلی وجود ندارد. شما می‌توانید با هر مبلغی معامله کنید.',
  },
  {
    q: 'آیا احراز هویت بایننس تضمین می‌شود؟',
    a: 'بله، تیم متخصص ما با سال‌ها تجربه، احراز هویت شما را با موفقیت انجام می‌دهد.',
  },
  {
    q: 'زمان انتقال پول بین‌المللی چقدر است؟',
    a: 'بسته به کشور مقصد و روش انتقال، معمولاً بین ۱ تا ۳ روز کاری زمان می‌برد.',
  },
  {
    q: 'آیا خدمات SWIFT برای همه کشورها موجود است؟',
    a: 'خدمات SWIFT برای اکثر کشورها موجود است. برای اطلاعات بیشتر با ما تماس بگیرید.',
  },
  {
    q: 'نحوه مشاوره سرمایه‌گذاری چگونه است؟',
    a: 'مشاوره به صورت آنلاین و تلفنی انجام می‌شود. ابتدا نیازهای شما بررسی شده و سپس راهکار مناسب ارائه می‌گردد.',
  },
  {
    q: 'آیا بیت گرند مجوز رسمی دارد؟',
    a: 'بیت گرند با ۱۷ سال سابقه فعالیت، دارای مجوزهای لازم از مراجع ذی‌صلاح است.',
  },
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
