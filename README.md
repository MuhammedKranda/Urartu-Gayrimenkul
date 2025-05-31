# Urartu Gayrimenkul Landing Page

Modern, profesyonel ve SEO uyumlu tek sayfalık (single-page) gayrimenkul satış/kiralama şirketi landing sayfası.

## Özellikler

- **SEO Optimizasyonu**: Semantic HTML5, gerekli meta etiketleri, Open Graph, Twitter Card ve JSON-LD yapılandırılmış veri
- **Responsive Tasarım**: Mobile-first yaklaşım, tüm cihazlarda uyumlu görüntüleme
- **Modern UI/UX**: Temiz ve minimalist tasarım, uyumlu renk paleti ve okunabilir tipografi
- **Performans**: Hızlı yükleme için optimize edilmiş kod ve lazy loading görseller
- **Erişilebilirlik**: WCAG 2.1 AA standartlarına uygun, klavye navigasyonu destekli

## Teknolojiler

- React.js
- Tailwind CSS
- React Helmet (SEO meta etiketleri için)

## Kurulum

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/your-username/urartu-gayrimenkul.git
   cd urartu-gayrimenkul
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   npm start
   ```

4. Tarayıcınızda görüntüleyin:
   ```
   http://localhost:3000
   ```

## Proje Yapısı

```
urartu-gayrimenkul/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── UrartuLanding.jsx      # Ana landing page bileşeni
│   ├── UrartuLanding.css      # Özel animasyonlar ve stillemeler
│   └── index.js               # Giriş noktası
├── package.json
├── tailwind.config.js
└── README.md
```

## Görseller

Aşağıdaki dosyaların `/public/images/` klasörüne eklenmesi gerekmektedir:

- urartu-logo.svg
- urartu-logo-white.svg
- hero-background.jpg
- about-us.jpg
- property-1.jpg
- property-2.jpg
- property-3.jpg
- testimonial-1.jpg
- testimonial-2.jpg
- testimonial-3.jpg

## Yapılacaklar

- [ ] Form gönderim fonksiyonalitesi
- [ ] Daha fazla portföy elemanı ekleme
- [ ] Filtreleme özelliği
- [ ] Sayfa içi arama

## Lisans

MIT

## İletişim

Bu proje hakkında sorularınız için [info@urartugayrimenkul.com](mailto:info@urartugayrimenkul.com) adresine e-posta gönderebilirsiniz. 