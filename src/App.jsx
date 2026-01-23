import React, { useState, useEffect } from 'react';
import { 
  Globe, Phone, MapPin, Building2, Home, LandPlot, ShieldCheck, 
  MessageCircle, Menu, X, ArrowUpRight, Check, ArrowRight,
  FileCheck, ShieldAlert, User2, Quote, TrendingUp, Sparkles,
  Instagram, Twitter, Linkedin, Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SafeIcon component to prevent crashes ---
const SafeIcon = ({ icon: Icon, size = 24, className = "" }) => {
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

// --- Magical Magic Dust Decoration for Dark Sections (Professional & Balanced) ---
const DarkSectionDecor = () => {
  const [particles] = useState(() => 
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 10 + Math.random() * 12,
      delay: Math.random() * 5,
      sway: Math.random() * 30 - 15
    }))
  );
const gtag_report_conversion = (url) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-10782053895/CaxsCOyUrOEbEIespJUo',
      'value': 1.0,
      'currency': 'SAR',
      'event_callback': () => {
        if (typeof url !== 'undefined') {
          window.location = url;
        }
      }
    });
  }
  return false;
};
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ left: `${p.x}%`, top: `${p.y}%`, opacity: 0 }}
          animate={{ 
            top: [`${p.y}%`, `${(p.y - 15 + 100) % 100}%`],
            left: [`${p.x}%`, `${(p.x + p.sway + 100) % 100}%`],
            opacity: [0, 0.7, 0] 
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{ 
            width: `${p.size}px`, 
            height: `${p.size}px`,
            boxShadow: "0 0 10px #D4AF37"
          }}
        />
      ))}
    </div>
  );
};

// --- Background for Light Sections ---
const MovingBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ x: [0, 30, 0], y: [0, 40, 0] }} 
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#C5A059]/5 blur-[100px] rounded-full"
    />
  </div>
);

const HeroVector = () => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} d="M150 500H650V550H150V500Z" fill="#F8F4EB" />
    <motion.rect initial={{ height: 0, y: 500 }} animate={{ height: 350, y: 150 }} transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }} x="200" y="150" width="80" height="350" fill="url(#gold_grad_1)" rx="4" />
    <motion.path initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ duration: 1.2, delay: 0.6, ease: "circOut" }} style={{ originY: "500px" }} d="M310 250L390 200V500H310V250Z" fill="url(#gold_grad_2)" />
    <motion.rect initial={{ height: 0, y: 500 }} animate={{ height: 420, y: 80 }} transition={{ duration: 1.8, ease: "circOut", delay: 0.4 }} x="420" y="80" width="100" height="420" fill="url(#gold_grad_3)" rx="6" />
    <defs>
      <linearGradient id="gold_grad_1" x1="240" y1="150" x2="240" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#D4AF37" /><stop offset="1" stopColor="#B8860B" /></linearGradient>
      <linearGradient id="gold_grad_2" x1="350" y1="200" x2="350" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#F9E5BC" /><stop offset="1" stopColor="#C5A059" /></linearGradient>
      <linearGradient id="gold_grad_3" x1="470" y1="80" x2="470" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#AA8939" /><stop offset="1" stopColor="#806517" /></linearGradient>
    </defs>
  </svg>
);

const App = () => {
  const [lang, setLang] = useState('ar'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const phoneNum = "+966559137178";
  const whatsappUrl = `https://wa.me/966559137178`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      location: "Riyadh, Saudi Arabia",
      brand: "Amal",
      brandSub: "RealEstate",
      nav: [
        { name: 'Services', target: 'Services' },
        { name: 'Compliance', target: 'Compliance' },
        { name: 'Vision', target: 'Vision' },
        { name: 'Contact', target: 'Connect' }
      ],
      heroTag: "Certified Real Estate Broker • REGA Approved",
      heroTitle: "Premium Property Investment in Riyadh",
      heroSubtitle: "Strategic advisory for global investors. We specialize in luxury villas, commercial assets, and prime land across the Riyadh region under Saudi law.",
      ctaPrimary: "Explore Listings",
      ctaSecondary: "Consult Now",
      license: "License No: 1100280825",
      stats: [
        { label: "Market Focus", val: "Riyadh" },
        { label: "Compliance", val: "100%" },
        { label: "Authority", val: "REGA" }
      ],
      services: [
        { title: "Commercial Assets", icon: Building2, desc: "High-yield commercial properties and corporate spaces in Riyadh's business districts." },
        { title: "Luxury Living", icon: Home, desc: "Premium villas and apartments for global clients looking for high-end residential investments." },
        { title: "Strategic Land", icon: LandPlot, desc: "Prime land acquisition opportunities for future-proof growth and development." }
      ],
      compliance: {
        tag: "Legal Assurance",
        title: "Certified & Regulated Service",
        desc: "Operating strictly under the General Authority for Real Estate (REGA) regulations. We ensure your investment is safe, transparent, and fully compliant with Saudi vision 2030 reforms.",
        eServiceTag: "Fully Licensed Brokerage 2025",
        cards: [
          { title: "Verified Listings", icon: ShieldCheck, detail: "Every property advertisement carries an official REGA license number." },
          { title: "Deed Check", icon: FileCheck, detail: "Digital verification of title deeds for absolute legal security." },
          { title: "E-Contracts", icon: Check, detail: "Direct integration with the national real estate E-contracting platforms." }
        ]
      },
      identity: {
        title: "Amal - Your Certified Real Estate Partner",
        brokerTag: "REGA Licensed Broker #1100280825",
        mission: "My mission is to find the perfect client for your property and the best investment for your capital using modern social media marketing and advanced digital tools."
      },
      contactSection: {
        title: "Direct Inquiry",
        subtitle: "We receive owner listings and buyer requests for all types of properties in Riyadh.",
        description: "Connect with us directly for personalized real estate assistance.",
        whatsappBtn: "WhatsApp Direct",
        callBtn: "Voice Call"
      },
      footer: {
        about: "Certified real estate marketing and advisory in Riyadh, committed to professional excellence and legal transparency.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        rights: "All rights reserved. Amal Real Estate © 2025",
        links: ["Privacy Policy", "Terms", "Sitemap"]
      }
    },
    ar: {
      location: "الرياض، المملكة العربية السعودية",
      brand: "Amal",
      brandSub: "RealEstate",
      nav: [
        { name: 'خدماتنا', target: 'Services' },
        { name: 'الأنظمة', target: 'Compliance' },
        { name: 'الرؤية', target: 'Vision' },
        { name: 'تواصل معي', target: 'Connect' }
      ],
      heroTag: "وسيط ومسوق عقاري معتمد • هيئة العقار",
      heroTitle: "بوابتك للاستثمار العقاري في الرياض",
      heroSubtitle: "نستقبل عروض الملّاك وطلبات المشترين بخبرة احترافية. تخصصنا تسويق الفلل، الأراضي، العقارات التجارية، وجميع الأصول في منطقة الرياض.",
      ctaPrimary: "عرض العروض",
      ctaSecondary: "استشارة فورية",
      license: "رقم الترخيص: 1100280825",
      stats: [
        { label: "منطقة التركيز", val: "الرياض" },
        { label: "موثوقية", val: "100%" },
        { label: "الجهة", val: "هيئة العقار" }
      ],
      services: [
        { title: "عقارات تجارية", icon: Building2, desc: "نسوق لأفضل الفرص التجارية والمكاتب في أرقى أحياء ومراكز الأعمال بالرياض." },
        { title: "فلل وشقق فاخرة", icon: Home, desc: "نبحث لك عن السكن المثالي أو العميل الأنسب لفيلاك أو شقتك بأسرع وقت." },
        { title: "أراضي استثمارية", icon: LandPlot, desc: "نوفر عروض وطلبات الأراضي الخام والمطورة المناسبة لمشاريعكم المستقبلية." }
      ],
      compliance: {
        tag: "الضمان القانوني",
        title: "وساطة مرخصة وموثوقة",
        desc: "نعمل تحت مظلة الهيئة العامة للعقار لضمان أمان صفقاتك. نطبق أعلى معايير الشفافية في العقود والتسويق لضمان حقوق كافة الأطراف.",
        eServiceTag: "امتثال كامل لأنظمة العقار 2025",
        cards: [
          { title: "إعلانات مرخصة", icon: ShieldCheck, detail: "كافة عروضنا تحمل أرقام تراخيص إعلانية رسمية من هيئة العقار." },
          { title: "توثيق الصكوك", icon: FileCheck, detail: "نتحقق رقمياً من صكوك الملكية لكل عقار قبل البدء بالتسويق." },
          { title: "عقود موحدة", icon: Check, detail: "إبرام كافة الاتفاقيات عبر منصة الوساطة العقارية الإلكترونية المعتمدة." }
        ]
      },
      identity: {
        title: "أمل العنزي - وسيط عقاري معتمد",
        brokerTag: "ترخيص هيئة العقار رقم 1100280825",
        mission: "مهمتي هي البحث لكم عن العميل الأنسب والتسويق للعقار بأفضل الطرق الحديثة، عبر إعلانات احترافية في برامج التواصل الاجتماعي."
      },
      contactSection: {
        title: "تواصل مباشر",
        subtitle: "نستقبل عروض الملاك وطلبات المشترين في منطقة الرياض (فلل • أراضي • شقق • تجاري).",
        description: "تواصل معنا مباشرة للحصول على مساعدة عقارية فورية ومخصصة.",
        whatsappBtn: "واتساب مباشر",
        callBtn: "اتصال هاتفي"
      },
      footer: {
        about: "نحن نقدم خدمات تسويق واستشارات عقارية معتمدة في مدينة الرياض، نلتزم بالاحترافية العالية والشفافية القانونية.",
        quickLinks: "روابط سريعة",
        contactInfo: "معلومات التواصل",
        rights: "جميع الحقوق محفوظة. أمل العقارية © 2025",
        links: ["سياسة الخصوصية", "الشروط", "خريطة الموقع"]
      }
    }
  };

  const t = content[lang];

  return (
    <div 
      className={`min-h-screen bg-white text-[#1A1A1A] selection:bg-[#F3E5AB] overflow-x-hidden scroll-smooth ${lang === 'ar' ? 'font-sans text-right' : 'font-sans text-left'}`} 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      style={{ scrollPaddingTop: '80px' }}
    >
      {/* Floating WhatsApp Button */}
      <motion.a 
        href={whatsappUrl}
        onClick={() => gtag_report_conversion(whatsappUrl)}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 z-[200] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.5)] transition-all ${lang === 'ar' ? 'left-8' : 'right-8'}`}
      >
        <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-[#25D366] rounded-full -z-10" />
        <MessageCircle size={32} fill="white" />
      </motion.a>

      {/* Header */}
      <header className="relative w-full z-[100]">
        <div className="bg-[#1A1A1A] border-b border-[#C5A059]/20 py-2 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[9px] md:text-[10px] font-bold tracking-widest text-[#C5A059] uppercase relative z-10">
            <div className="flex items-center gap-2">
              <ShieldCheck size={12} />
              {t.license}
            </div>
            <div className="hidden sm:block opacity-70 tracking-normal">{t.location}</div>
          </div>
        </div>

        <nav className={`fixed left-0 w-full transition-all duration-500 ${scrolled ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg py-3 md:py-4 border-b border-[#C5A059]/10' : 'top-[30px] md:top-[36px] bg-white py-4 md:py-6 border-b-transparent'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-[#C5A059] rounded flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-base">A</div>
              <span className={`text-lg md:text-xl font-bold tracking-tight uppercase ${lang === 'ar' ? 'mr-2' : 'ml-1'}`}>
                {t.brand}<span className="text-[#C5A059] italic">{t.brandSub}</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {t.nav.map((item) => (
                <a key={item.target} href={`#${item.target}`} className="text-[11px] font-bold text-slate-500 hover:text-[#C5A059] transition-colors uppercase relative group">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] text-[10px] font-bold uppercase text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-sm">
                <Globe size={12} /> {lang === 'en' ? 'العربية' : 'English'}
              </button>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="p-2 bg-[#FBF7ED] text-[#C5A059] rounded-lg">
                <Globe size={18} />
              </button>
              <button className="text-[#1A1A1A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, x: lang === 'ar' ? '100%' : '-100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: lang === 'ar' ? '100%' : '-100%' }} className="fixed inset-0 z-[150] bg-white pt-24 px-8 flex flex-col gap-6 md:hidden">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
               <span className="text-xl font-bold text-[#C5A059]">{lang === 'ar' ? 'القائمة' : 'Menu'}</span>
               <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            {t.nav.map((item) => (
              <a key={item.target} href={`#${item.target}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-[#1A1A1A] hover:text-[#C5A059] border-b border-slate-50 pb-4">
                {item.name}
              </a>
            ))}
            <div className="mt-auto mb-12">
               <a href={`tel:${phoneNum}`} className="w-full py-4 bg-[#C5A059] text-white rounded-xl font-bold flex items-center justify-center gap-2 text-center">
                 <Phone size={20} /> {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-24 md:h-28" />

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12 pb-12 md:pb-20 overflow-hidden bg-white">
        <MovingBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
              <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-[#FBF7ED] text-[#C5A059] text-[10px] font-bold uppercase rounded-full mb-6 border border-[#C5A059]/20 shadow-sm">
                {t.heroTag}
              </motion.div>
              <motion.h1 variants={itemVariants} className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-[#1A1A1A] ${lang === 'ar' ? 'leading-tight' : ''}`}>
                {t.heroTitle}
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-xl font-medium opacity-80">
                {t.heroSubtitle}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.a href="#Services" whileHover={{ scale: 1.05 }} className="w-full sm:w-auto px-10 py-4 bg-[#C5A059] text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-[#C5A059]/20 transition-all flex items-center justify-center gap-2 group text-center">
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight size={18} className={`transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </motion.a>
                <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="w-full sm:w-auto px-10 py-4 bg-white border border-[#C5A059]/30 text-[#1A1A1A] rounded-2xl font-bold hover:bg-[#FBF7ED] transition-all flex items-center justify-center gap-2 text-center text-sm md:text-base">
                  {t.ctaSecondary}
                </motion.a>
              </motion.div>
            </div>
            <div className="relative flex justify-center w-full mt-12 lg:mt-0">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full max-w-lg lg:max-w-2xl relative">
                 <div className="absolute inset-0 bg-[#C5A059]/10 blur-[100px] rounded-full transform -translate-y-10" />
                 <HeroVector />
              </motion.div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className={`absolute -bottom-6 ${lang === 'ar' ? 'right-0 lg:-right-6' : 'left-0 lg:-left-6'} bg-[#1A1A1A] p-4 md:p-6 rounded-[2rem] shadow-2xl border border-[#C5A059]/20 hidden sm:block overflow-hidden min-w-[320px]`}>
                <DarkSectionDecor />
                <div className="flex gap-6 md:gap-10 text-[#C5A059] relative z-10 justify-center">
                  {t.stats.map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl md:text-2xl font-bold">{s.val}</p>
                      <p className={`text-[8px] md:text-[9px] font-bold opacity-60 uppercase`}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Services" className="py-16 md:py-24 bg-[#fafafa] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="mb-12 md:mb-16 text-center">
            <h2 className="text-xs md:text-sm font-bold text-[#C5A059] uppercase mb-4 tracking-widest">{lang === 'en' ? 'Expertise' : 'مجالات تركيزنا'}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight text-center">{lang === 'en' ? 'Strategic Real Estate Services' : 'خدمات عقارية متكاملة بالرياض'}</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.services.map((service, i) => (
              <motion.div key={i} {...fadeInUp} whileHover={{ y: -12, scale: 1.02 }} className="group p-8 md:p-10 bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[#C5A059]/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FBF7ED] rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 md:mb-8 group-hover:bg-[#C5A059] group-hover:text-white transition-all shadow-sm">
                  <SafeIcon icon={service.icon} size={28} />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#C5A059] transition-colors">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="Compliance" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp} className="w-full lg:w-1/2">
              <span className="text-[#C5A059] font-bold text-xs md:text-sm uppercase mb-4 block tracking-widest">{t.compliance.tag}</span>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-[#1A1A1A]">{t.compliance.title}</h3>
              <div className="space-y-4 md:space-y-6">
                {t.compliance.cards.map((card, i) => (
                  <motion.div key={i} whileHover={{ x: lang === 'ar' ? -10 : 10, scale: 1.01 }} className="flex gap-4 md:gap-6 p-5 md:p-7 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[#C5A059]/10 shadow-sm transition-all">
                    <div className="text-[#C5A059] flex-shrink-0"><SafeIcon icon={card.icon} size={28} /></div>
                    <div className="text-start">
                      <h4 className="font-bold mb-1 text-[#1A1A1A] text-base md:text-lg">{card.title}</h4>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{card.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="w-full lg:w-1/2 bg-[#1A1A1A] p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
              <DarkSectionDecor />
              <div className="relative z-10">
                <ShieldAlert className="mb-6 md:mb-10 text-[#C5A059]" size={56} />
                <h4 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 italic leading-snug">
                  {lang === 'ar' ? '"أبحث لكم عن العميل الأنسب وأسوق لعقاراتكم بأفضل الطرق التقنية والإعلانية الحديثة."' : '"We find the perfect client for you and market your property using the best modern advertising and tech methods."'}
                </h4>
                <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-light">{t.compliance.desc}</p>
                <div className="flex items-center gap-4 md:gap-5 border-t border-[#C5A059]/20 pt-8 md:pt-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#C5A059]/20 rounded-2xl flex items-center justify-center text-[#C5A059]">
                    <Check size={28}/>
                  </div>
                  <p className="font-bold text-[10px] md:text-sm uppercase text-[#C5A059]">{t.compliance.eServiceTag}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="Vision" className="py-16 md:py-24 bg-[#FBFBFB] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-xl border border-[#C5A059]/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                <motion.div whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }} className="w-24 h-24 md:w-32 md:h-32 bg-[#C5A059] rounded-[2.5rem] md:rounded-[3rem] flex items-center justify-center text-white mb-8 shadow-2xl relative overflow-hidden">
                  <User2 size={64} strokeWidth={1.2} />
                  <motion.div animate={{ x: [-100, 200] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[#1A1A1A] leading-tight">{t.identity.title}</h2>
                <p className="text-[#C5A059] font-bold text-base md:text-lg mb-4">{t.identity.brokerTag}</p>
                <div className="flex items-center gap-4 text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                   <TrendingUp size={16} /> {lang === 'ar' ? 'نمو الرياض 2030' : 'Riyadh Growth 2030'}
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-[#1A1A1A] p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden text-start group">
                <DarkSectionDecor />
                <div className="relative z-10">
                  <div className="flex justify-start">
                     <Quote className={`mb-6 text-[#C5A059] opacity-40 ${lang === 'ar' ? 'rotate-180' : ''}`} size={48} />
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-8 md:mb-10">{t.identity.mission}</p>
                  <div className="flex items-center gap-3">
                     <Sparkles className="text-[#C5A059]" size={16} />
                     <span className="text-[9px] md:text-[10px] uppercase font-bold text-[#C5A059]">{lang === 'ar' ? 'وسيط معتمد' : 'REGA CERTIFIED'}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Connect" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div className="text-center lg:text-start">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight uppercase text-[#1A1A1A]">
                {lang === 'ar' ? 'مستعدة لنمو' : 'Ready for'}<br/>
                <span className="text-[#C5A059]">{lang === 'ar' ? 'الرياض؟' : 'Riyadh?'}</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg mb-10 max-w-md mx-auto lg:mx-0 font-medium">{t.contactSection.subtitle}</p>
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center gap-4 md:gap-6 group transition-all cursor-pointer">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-[#FBF7ED] flex items-center justify-center text-[#C5A059] shadow-sm group-hover:bg-[#C5A059] group-hover:text-white transition-all text-center">
                    <MapPin size={24} />
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-slate-500 leading-tight group-hover:text-[#1A1A1A] transition-colors">{t.location}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border border-[#C5A059]/20 shadow-2xl flex flex-col items-center justify-center text-center gap-6 md:gap-8 relative overflow-hidden group">
               <DarkSectionDecor />
               <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] relative z-10">
                  <MessageCircle size={40} className="group-hover:scale-110 transition-transform" />
               </div>
               <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{t.contactSection.title}</h3>
                  <p className="text-slate-400 text-sm md:text-lg max-w-xs mx-auto leading-relaxed">{t.contactSection.description}</p>
               </div>
               
               <div className="flex flex-col w-full gap-4 relative z-10">
                  <motion.a 
                    whileHover={{ scale: 1.03 }} 
                    href={whatsappUrl} 
                    onClick={() => gtag_report_conversion(whatsappUrl)}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-4 md:py-5 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#1ebc56] transition-all uppercase text-sm md:text-base tracking-widest shadow-xl shadow-green-500/10 text-center"
                  >
                    <MessageCircle size={24} /> <span>{t.contactSection.whatsappBtn}</span>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.03 }} 
                    href={`tel:${phoneNum}`} 
                    onClick={() => gtag_report_conversion(`tel:${phoneNum}`)}
                    className="w-full py-4 md:py-5 bg-[#C5A059] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#B8860B] transition-all uppercase text-sm md:text-base tracking-widest shadow-xl shadow-[#C5A059]/10 text-center"
                  >
                    <Phone size={24} /> <span>{t.contactSection.callBtn}</span>
                  </motion.a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] pt-16 md:pt-24 pb-8 md:pb-12 text-white border-t border-[#C5A059]/10 relative overflow-hidden">
        <DarkSectionDecor />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
            <div className="flex flex-col gap-6 items-center sm:items-start text-center sm:text-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#C5A059] rounded flex items-center justify-center text-white font-bold shadow-lg text-sm">A</div>
                <span className="text-xl md:text-2xl font-bold tracking-tight uppercase">Amal<span className="text-[#C5A059] italic">RealEstate</span></span>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xs">{t.footer.about}</p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                  <motion.a key={i} whileHover={{ y: -3, color: "#fff" }} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] transition-all">
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center sm:items-start text-center sm:text-start">
              <h4 className="text-[#C5A059] font-bold uppercase tracking-widest text-[10px] md:text-xs border-r-2 border-[#C5A059] pr-3">{t.footer.quickLinks}</h4>
              <ul className="flex flex-col gap-4 text-slate-400 text-xs md:text-sm font-medium">
                {t.nav.map((link) => (
                  <li key={link.target}>
                    <motion.a whileHover={{ x: 5, color: "#C5A059" }} href={`#${link.target}`} className="transition-all flex items-center gap-2 justify-center sm:justify-start">
                      <ArrowRight size={12} className={lang === 'ar' ? 'rotate-180' : ''} /> <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 items-center sm:items-start text-center sm:text-start">
              <h4 className="text-[#C5A059] font-bold uppercase tracking-widest text-[10px] md:text-xs border-r-2 border-[#C5A059] pr-3">{t.footer.contactInfo}</h4>
              <ul className="flex flex-col gap-4 text-slate-400 text-xs md:text-sm">
                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <MapPin className="text-[#C5A059] flex-shrink-0" size={18} />
                  <span>{t.location}</span>
                </li>
                <li className="flex items-center gap-3 justify-center sm:justify-start">
                  <Phone className="text-[#C5A059] flex-shrink-0" size={18} />
                  <a href={`tel:${phoneNum}`} className="hover:text-white transition-colors tracking-widest" dir="ltr">{phoneNum}</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 items-center sm:items-start">
               <h4 className="text-[#C5A059] font-bold uppercase tracking-widest text-[10px] md:text-xs border-r-2 border-[#C5A059] pr-3">{lang === 'ar' ? 'الاعتمادات' : 'Compliance'}</h4>
               <motion.div whileHover={{ scale: 1.02 }} className="w-full p-6 bg-white/5 rounded-3xl border border-[#C5A059]/20 flex flex-col gap-3 text-center sm:text-start items-center sm:items-start group">
                <ShieldCheck className="text-[#C5A059] group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <p className="text-white font-bold text-[10px] md:text-xs uppercase mb-1">{t.license}</p>
                  <p className="text-slate-500 text-[9px] md:text-[10px] leading-tight">
                    {lang === 'ar' ? 'وسيط عقاري مرخص من الهيئة العامة للعقار بالمملكة العربية السعودية.' : 'Licensed Real Estate Broker by the General Authority for Real Estate, KSA.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-center">
            <p>{t.footer.rights}</p>
            <div className="flex gap-6 md:gap-8">
              {['Privacy', 'Terms', 'Sitemap'].map(link => (
                <a key={link} href="#" className="hover:text-[#C5A059] transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;