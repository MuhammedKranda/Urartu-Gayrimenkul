import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './UrartuLanding.css'; // Import custom CSS for animations

// Main component for the Urartu Gayrimenkul landing page
const UrartuLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SEO and Meta Tags */}
      <Helmet>
        <title>Urartu Gayrimenkul | Profesyonel Emlak Hizmetleri</title>
        <meta name="description" content="Urartu Gayrimenkul ile hayalinizdeki eve kavuşun. Profesyonel emlak danışmanlığı, gayrimenkul yatırımı ve kiralama hizmetleri sunuyoruz." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://urartugayrimenkul.com" />
        <link rel="icon" href="https://i.hizliresim.com/9r6r3lx.png" type="image/png" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Urartu Gayrimenkul | Profesyonel Emlak Hizmetleri" />
        <meta property="og:description" content="Urartu Gayrimenkul ile hayalinizdeki eve kavuşun. Profesyonel emlak danışmanlığı, gayrimenkul yatırımı ve kiralama hizmetleri." />
        <meta property="og:image" content="https://urartugayrimenkul.com/images/urartu-og-image.jpg" />
        <meta property="og:url" content="https://urartugayrimenkul.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urartu Gayrimenkul | Profesyonel Emlak Hizmetleri" />
        <meta name="twitter:description" content="Urartu Gayrimenkul ile hayalinizdeki eve kavuşun. Profesyonel emlak danışmanlığı, gayrimenkul yatırımı ve kiralama hizmetleri." />
        <meta name="twitter:image" content="https://urartugayrimenkul.com/images/urartu-twitter-image.jpg" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Urartu Gayrimenkul",
            "image": "https://urartugayrimenkul.com/images/logo.png",
            "url": "https://urartugayrimenkul.com",
            "telephone": "+90-212-555-5555",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bağdat Caddesi No: 123",
              "addressLocality": "Kadıköy",
              "addressRegion": "İstanbul",
              "postalCode": "34000",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.9812,
              "longitude": 29.0585
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/urartugayrimenkul",
              "https://www.instagram.com/urartugayrimenkul",
              "https://www.linkedin.com/company/urartugayrimenkul"          
            ]
          }
        `}</script>
      </Helmet>

      {/* Main Website Structure */}
      <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
        {/* Header */}
        <header className={`fixed w-full z-50 transition-all duration-300 ${
          scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}>
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://i.hizliresim.com/9r6r3lx.png" 
                alt="Urartu Gayrimenkul Logo" 
                className="h-10 w-auto"
                loading="eager"
              />
              <span className={`ml-2 font-bold text-xl ${
                scrollPosition > 50 ? 'text-bronze-dark' : 'text-white'
              }`}>
                Urartu Gayrimenkul
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                {['Ana Sayfa', 'Hizmetlerimiz', 'Hakkımızda'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className={`font-medium hover:text-gold transition-colors ${
                        scrollPosition > 50 ? 'text-gray-800' : 'text-white'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#iletişim" 
                    className={`font-medium hover:text-gold transition-colors ${
                      scrollPosition > 50 ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    İletişim
                  </a>
                </li>
                <li>
                  <a 
                    href="https://urartugayrimenkul.sahibinden.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium hover:text-gold transition-colors ${
                      scrollPosition > 50 ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    Portföy
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              <svg 
                className={`w-6 h-6 ${scrollPosition > 50 ? 'text-gray-800' : 'text-white'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden bg-white shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="px-4 py-2">
              {['Ana Sayfa', 'Hizmetlerimiz', 'Hakkımızda'].map((item) => (
                <li key={item} className="py-2 border-b border-gray-100 last:border-0">
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block font-medium text-gray-800 hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="py-2 border-b border-gray-100 last:border-0">
                <a 
                  href="#iletişim"
                  className="block font-medium text-gray-800 hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </a>
              </li>
              <li className="py-2 border-b border-gray-100 last:border-0">
                <a 
                  href="https://urartugayrimenkul.sahibinden.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium text-gray-800 hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portföy
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section id="ana-sayfa" className="relative h-screen flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.hizliresim.com/42uj2xp.JPG" 
                alt="Modern Lüks Daire" 
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 hero-gradient-overlay"></div>
            </div>
            
            {/* Hero Content */}
            <div className="container mx-auto px-4 relative z-10 text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                Hayalinizdeki Mülke <span className="text-primary-gold-light">Urartu</span> İle Ulaşın
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200 animate-fade-in-delay">
                20 yıllık tecrübemizle, sizi hayalinizdeki eve kavuşturmak için en kaliteli emlak hizmetini sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
                <a 
                  href="https://urartugayrimenkul.sahibinden.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-gradient font-medium py-3 px-8 rounded-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
                >
                  Portföyümüzü Keşfedin
                </a>
                <a 
                  href="#iletişim" 
                  className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                >
                  Bize Ulaşın
                </a>
              </div>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
              <a 
                href="#hizmetlerimiz" 
                className="text-white focus:outline-none"
                aria-label="Aşağı kaydır"
              >
                <svg 
                  className="w-8 h-8" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section id="hizmetlerimiz" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-bronze-dark mb-4">Hizmetlerimiz</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Urartu Gayrimenkul olarak, gayrimenkul sektöründe kapsamlı ve profesyonel hizmetler sunuyoruz.
                </p>
              </div>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Card 1 */}
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-gold mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Konut Satışı</h3>
                  <p className="text-gray-600 mb-4">
                    İhtiyaçlarınıza ve bütçenize en uygun konutları bulmanızda yardımcı oluyoruz. Geniş portföyümüzle size en iyi seçenekleri sunuyoruz.
                  </p>
                  <a href="https://urartugayrimenkul.sahibinden.com/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:text-bronze-dark transition-colors inline-flex items-center">
                    Daha Fazla Bilgi
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                {/* Service Card 2 */}
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-gold mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Ticari Gayrimenkul</h3>
                  <p className="text-gray-600 mb-4">
                    İşletmeniz için en uygun lokasyonda ticari gayrimenkul bulmanıza yardımcı oluyor, yatırımınızın değerini maksimize ediyoruz.
                  </p>
                  <a href="https://urartugayrimenkul.sahibinden.com/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:text-bronze-dark transition-colors inline-flex items-center">
                    Daha Fazla Bilgi
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-gold mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Profesyonel Hizmet</h3>
                  <p className="text-gray-600 mb-4">
                  Profesyonel drone çekimleri, yüksek çözünürlüklü fotoğraf ve video hizmeti ile mülkünüzü en doğru şekilde hedef kitleye ulaştırıyoruz.
                  </p>
                  <a href="https://urartugayrimenkul.sahibinden.com/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:text-bronze-dark transition-colors inline-flex items-center">
                    Daha Fazla Bilgi
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>


                {/* Additional service cards would go here - truncated for brevity */}
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="hakkımızda" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Image Column */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative z-10">
                    <img 
                      src='https://i.hizliresim.com/qyqibda.jpg'
                      alt="Urartu Gayrimenkul Ofisi" 
                      className="w-full h-auto rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-12 right-12 w-32 h-32 bg-gold rounded-full z-0 animate-pulse opacity-20"></div>
                  <div className="absolute top-12 left-12 w-48 h-48 bg-bronze-dark rounded-full z-0 animate-pulse opacity-20"></div>
                </div>
                
                {/* Content Column */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-bronze-dark mb-6">20 Yıllık Güvenilir Hizmet</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Urartu Gayrimenkul olarak, 2003 yılından bu yana İstanbul'un en prestijli bölgelerinde gayrimenkul hizmetleri sunmaktayız. Müşteri memnuniyetini her zaman ön planda tutan yaklaşımımızla, sektörün önde gelen firmalarından biri haline geldik.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Deneyimli ve profesyonel ekibimizle, müşterilerimizin ihtiyaçlarını en iyi şekilde anlayarak, onlara özel çözümler sunuyoruz. Satış, kiralama, yatırım danışmanlığı ve gayrimenkul yönetimi alanlarında kapsamlı hizmetler veriyoruz.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gold mb-1">20+</div>
                      <div className="text-sm text-gray-600">Yıllık Tecrübe</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gold mb-1">500+</div>
                      <div className="text-sm text-gray-600">Satılan Gayrimenkul</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gold mb-1">1200+</div>
                      <div className="text-sm text-gray-600">Mutlu Müşteri</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gold mb-1">30+</div>
                      <div className="text-sm text-gray-600">Uzman Danışman</div>
                    </div>
                  </div>
                  
                  <a 
                    href="#iletişim"
                    className="inline-block btn-gold-gradient font-medium py-3 px-8 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
                  >
                    Bizimle İletişime Geçin
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="referanslar" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold testimonial-heading mb-4">Müşterilerimiz Ne Diyor?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Müşterilerimizin memnuniyeti bizim için en önemli başarı göstergesidir. İşte müşterilerimizden bazı geri bildirimler.
                </p>
              </div>
              
              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="testimonial-card p-8 rounded-lg shadow-md relative">
                  <div className="testimonial-quote absolute -top-4 left-8">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 mb-6 mt-4">
                    Urartu Gayrimenkul ile çalışmak gerçekten harika bir deneyimdi. Profesyonel ekipleri sayesinde hayalimizde olan evi kısa sürede bulduk. Tüm süreç boyunca her adımda yanımızda oldular.
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-gray-800">Ahmet Yılmaz</h4>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="testimonial-card p-8 rounded-lg shadow-md relative">
                  <div className="testimonial-quote absolute -top-4 left-8">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 mb-6 mt-4">
                    Ticari gayrimenkul yatırımımda Urartu'nun sunduğu danışmanlık hizmeti sayesinde beklentilerimin üzerinde bir getiri elde ettim. Piyasa bilgileri ve stratejik önerileri gerçekten değerliydi.
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-gray-800">Zeynep Kaya</h4>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 3 */}
                <div className="testimonial-card p-8 rounded-lg shadow-md relative">
                  <div className="testimonial-quote absolute -top-4 left-8">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 mb-6 mt-4">
                    Şirketimiz için yeni ofis ararken Urartu Gayrimenkul'un portföyündeki çeşitlilik ve ekibin anlayışlı yaklaşımı bizi çok etkiledi. İhtiyaçlarımıza tam uyan bir mekan bulduk.
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-gray-800">Mert Demir</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="iletişim" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold contact-heading mb-4">İletişim Bilgilerimiz</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Gayrimenkul ihtiyaçlarınızla ilgili sorularınız mı var? Aşağıdaki kanallardan bizimle iletişime geçebilirsiniz.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Contact Card - Address */}
                <div className="contact-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  <div className="flex justify-center address-icon mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Adresimiz</h3>
                  <p className="text-gray-600">
                  Yasemin Konakları, Yenibosna Merkez<br />
                  Şht. Selim Ayaydın Cd. 1A D:6G, 34197<br />
                  Bahçelievler/İstanbul
                  </p>
                </div>
                
                {/* Contact Card - Phone */}
                <div className="contact-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  <div className="flex justify-center phone-icon mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Telefon Numaralarımız</h3>
                  <p className="text-gray-600">
                    <a href="tel:+902124515090" className="hover:text-gold transition-colors">+90 (212) 451 50 90</a><br />
                    <a href="tel:+905423171582" className="hover:text-gold transition-colors">+90 (542) 317 15 82</a>
                  </p>
                  <p className="mt-4 text-gray-500 text-sm">
                    Hafta içi 09:00 - 18:00<br />
                    Cumartesi 09:00 - 18:00
                  </p>
                </div>
                
                {/* Contact Card - Email */}
                <div className="contact-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  <div className="flex justify-center email-icon mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">E-posta Adreslerimiz</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@urartugayrimenkul.com" className="hover:text-gold transition-colors">info@urartugayrimenkul.com</a><br />
                  </p>
                  <p className="mt-4 text-gray-500 text-sm">
                    E-postalarınıza en geç 24 saat içinde<br />
                    yanıt vermeye özen gösteriyoruz.
                  </p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12 social-container rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sosyal Medyada Bizi Takip Edin</h3>
                <div className="flex justify-center space-x-6 mt-4">
                  <a href="https://www.facebook.com/urartugayrimenkul" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/urartugayrimenkul" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/urartugayrimenkul" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="mt-6 text-gray-600">
                  Kampanyalardan ve yeni ilanlarımızdan haberdar olmak için sosyal medya hesaplarımızı takip edebilirsiniz.
                </p>
              </div>
            </div>
          </section>
          
          {/* Map Section */}
          <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="h-96 w-full bg-gray-200 map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.459870013041!2d28.82393527569557!3d41.01519391899953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa48d7d3de097%3A0x98e3b8280239986!2sUrartu%20Gayrimenkul!5e0!3m2!1str!2str!4v1748655099531!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Urartu Gayrimenkul Konum"
                  aria-label="Urartu Gayrimenkul Konum Haritası"
                ></iframe>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-bronze-darker text-white">
          {/* Main Footer */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-6">
                  <img 
                    src="https://i.hizliresim.com/9r6r3lx.png" 
                    alt="Urartu Gayrimenkul Logo" 
                    className="h-10 w-auto"
                  />
                  <span className="ml-2 font-bold text-xl footer-brand-name">Urartu Gayrimenkul</span>
                </div>
                <p className="footer-text mb-6">
                  20 yıllık tecrübemizle, gayrimenkul sektöründe güvenilir ve profesyonel hizmet sunuyoruz.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/urartugayrimenkul" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/urartugayrimenkul" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/urartugayrimenkul" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              
              {/* Quick Links */}
              <div>
                <h3 className="footer-heading text-lg font-semibold mb-6 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-primary-gold">
                  Hızlı Bağlantılar
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#ana-sayfa" className="footer-link">Ana Sayfa</a>
                  </li>
                  <li>
                    <a href="#hizmetlerimiz" className="footer-link">Hizmetlerimiz</a>
                  </li>
                  <li>
                    <a href="https://urartugayrimenkul.sahibinden.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Portföyümüz</a>
                  </li>
                  <li>
                    <a href="#hakkımızda" className="footer-link">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#iletişim" className="footer-link">İletişim</a>
                  </li>
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="footer-heading text-lg font-semibold mb-6 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-primary-gold">
                  Hizmetlerimiz
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#hizmetlerimiz" className="footer-link">Konut Satışı</a>
                  </li>
                  <li>
                    <a href="#hizmetlerimiz" className="footer-link">Ticari Gayrimenkul</a>
                  </li>
                  <li>
                    <a href="#hizmetlerimiz" className="footer-link">Gayrimenkul Danışmanlığı</a>
                  </li>
                  <li>
                    <a href="#hizmetlerimiz" className="footer-link">Gayrimenkul Değerleme</a>
                  </li>
                  <li>
                    <a href="#hizmetlerimiz" className='footer-link'>Profesyonel Hizmet</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="footer-section border-t border-bronze-dark py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
              <div className="footer-copyright text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Urartu Gayrimenkul. Tüm hakları saklıdır.
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="footer-legal-link text-sm">Gizlilik Politikası</a>
                <a href="#" className="footer-legal-link text-sm">Kullanım Koşulları</a>
                <a href="#" className="footer-legal-link text-sm">KVKK</a>
              </div>
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="back-to-top fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
            aria-label="Sayfa Başına Dön"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </footer>
      </div>
    </>
  );
};

export default UrartuLanding; 