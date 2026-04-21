# Lavinya Garden Elegance - Website

Esenyurt, İstanbul'da sıcak amber ışıklı lounge deneyimi sunan Lavinya'nın modern web sitesi.

## 📋 Proje Hakkında

Lavinya, Türk kahvesi, ev yapımı tatlılar ve taze yemekler sunarak gece 01:00'a kadar açık olan şehrin en sıcak köşesi.

**Web Sitesi:** [Lavinya Lounge](https://lavinya.vercel.app)

## 🛠️ Teknolojiler

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Routing:** React Router v6
- **State Management:** React Query (TanStack Query)
- **Forms:** React Hook Form + Zod
- **Animations:** Tailwind CSS Animate
- **Hosting:** Vercel

## 📦 Gereksinimler

- Node.js 16+ ve npm/yarn/pnpm/bun
- Modern web tarayıcı

## 🚀 Başlangıç

### 1. Repository'i Klonla

```bash
git clone https://github.com/YOURUSERNAME/garden-elegance.git
cd garden-elegance-website-main
```

### 2. Bağımlılıkları Yükle

```bash
npm install
# veya
yarn install
pnpm install
bun install
```

### 3. Development Server'ı Başlat

```bash
npm run dev
```

Tarayıcını `http://localhost:5173` adresine aç.

### 4. Build Et

```bash
npm run build
```

Production build `dist/` klasöründe hazırlanır.

### 5. Preview Yap

```bash
npm run preview
```

Production build'ı lokal olarak test et.

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── ui/             # Shadcn/ui bileşenleri
│   ├── About.tsx       # Hakkında bölümü
│   ├── Hero.tsx        # Hero section
│   ├── Menu.tsx        # Menü bölümü
│   ├── Gallery.tsx     # Galeri
│   ├── Reviews.tsx     # Müşteri yorumları
│   ├── Contact.tsx     # İletişim formu
│   └── Footer.tsx      # Footer
├── pages/              # Sayfa bileşenleri
│   ├── Index.tsx       # Ana sayfa
│   └── NotFound.tsx    # 404 sayfası
├── assets/             # Görseller ve medya
├── hooks/              # Custom React hooks
├── lib/                # Utility fonksiyonları
├── App.tsx             # Root bileşeni
├── main.tsx            # Entry point
└── index.css           # Global stiller

public/                 # Static dosyalar
vercel.json            # Vercel configuration
vite.config.ts         # Vite configuration
tsconfig.json          # TypeScript configuration
tailwind.config.ts     # Tailwind CSS configuration
```

## 🎨 Stil ve Tasarım

- Tailwind CSS custom configuration
- Mobile-first responsive design
- Dark mode ready (next-themes entegrasyonu)
- Accessible UI components

## ✨ Özellikler

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ High-performance optimized
- ✅ SEO friendly
- ✅ Form validation (React Hook Form + Zod)
- ✅ Image gallery with lightbox
- ✅ Contact form
- ✅ Social media integration
- ✅ Dark/Light mode support

## 🔧 Komutlar

```bash
# Development
npm run dev              # Dev server başlat

# Production
npm run build            # Production build
npm run preview          # Build'i test et

# Linting
npm run lint             # ESLint çalıştır

# Testing
npm run test             # Testleri çalıştır
npm run test:watch      # Watch mode'da test
```

## 🌐 Vercel'e Deploy Etme

Detaylı deployment rehberi için [DEPLOYMENT.md](./DEPLOYMENT.md) dosyasını oku.

### Hızlı Deploy

```bash
# Vercel CLI yükle
npm i -g vercel

# Deploy et
vercel --prod
```

## 🔐 Environment Variables

`.env.example` dosyasından başlangıç yap:

```bash
cp .env.example .env.local
```

Vercel dashboard'da environment variables ekle:
1. Project Settings → Environment Variables
2. Variable'ı ekle
3. Deploy

## 📱 Responsive Breakpoints

```
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
```

## 🔍 SEO Optimizasyon

- Meta tags (title, description, og:image)
- Structured data
- Mobile-friendly
- Fast page load times
- Proper heading hierarchy

## 🐛 Debugging

```bash
# Build output kontrol et
npm run build

# Errors kontrol et
npm run lint

# Type checking
npx tsc --noEmit
```

## 📝 Yapılan Güncellemeler

- ✅ Vercel configuration (`vercel.json`)
- ✅ `.vercelignore` dosyası eklendi
- ✅ `.npmrc` optimizasyon
- ✅ `.gitignore` güncellendi
- ✅ `.env.example` template
- ✅ DEPLOYMENT.md rehberi

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📧 İletişim

- **Website:** [Lavinya Lounge](https://lavinya.vercel.app)
- **Email:** info@lavinya.com
- **Phone:** +90 XXX XXX XXXX
- **Location:** Esenyurt, İstanbul

## 📄 Lisans

Bu proje özel olarak Lavinya Lounge için tasarlanmıştır.

---

**Son Güncelleme:** 21 Nisan 2026

