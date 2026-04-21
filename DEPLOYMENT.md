# Vercel Deployment Guide

Bu rehber, Lavinya Garden Elegance websitesini Vercel'e deploy etmek için adımları açıklar.

## Ön Koşullar

- [Vercel Account](https://vercel.com/signup)
- [GitHub Account](https://github.com) (opsiyonel ama tavsiye edilir)
- Node.js 16+ ve npm/yarn/pnpm

## Deployment Seçenekleri

### 1. GitHub Entegrasyonu ile Deployment (Önerilir)

1. **Repository'i GitHub'a Push Et**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/garden-elegance.git
   git push -u origin main
   ```

2. **Vercel'e Bağlan**
   - [Vercel Dashboard](https://vercel.com/dashboard) sayfasına git
   - "Add New" → "Project" tıkla
   - GitHub'ı bağla ve repo'yu seç
   - Aşağıdaki ayarları yap:

   **Build Settings:**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`

3. **Deploy Et**
   - "Deploy" butonuna tıkla
   - Vercel otomatik olarak build edecek ve deploy edecek

### 2. Vercel CLI ile Local Deployment

```bash
# 1. Vercel CLI'yi yükle
npm i -g vercel

# 2. Vercel'e giriş yap
vercel login

# 3. Deploy et
vercel

# 4. Production'a deploy et
vercel --prod
```

### 3. Direct Upload (Vercel Web UI)

1. [Vercel Dashboard](https://vercel.com/dashboard) aç
2. "Add New" → "Project" → "Import Git Repository"
3. Repo URL'sini gir
4. Deploy settings'i confirm et
5. "Deploy" tıkla

## Environment Variables

Herhangi bir API key veya sensitive bilgi varsa, Vercel dashboard'da ekle:

1. Project Settings → Environment Variables
2. Key-value çiftini gir
3. Kod içinde `process.env.VARIABLE_NAME` kullan

## Custom Domain Kurulumu

1. Vercel Dashboard → Project Settings → Domains
2. Custom domain'i ekle
3. DNS records'u update et (Vercel tarafından sağlanır)

## Build Optimizasyonu

### Node.js Versiyonu
```
vercel.json içinde node version ayarlanabilir:
"nodeVersion": "20.x"
```

### Performance
- `npm run build` ile production build test et
- Build time'ı minimize et
- Large assets'ları optimize et

## Troubleshooting

### Build Hatası: "Cannot find module"
- `node_modules` ve `package-lock.json` silinsin
- Fresh install: `npm ci`

### Port Hatası
- `vercel.json` içinde port ayarı kontrolü
- Vercel otomatik port tahsis eder

### Environment Variable Hatası
- Vercel dashboard'da `.env` variables'ı ekle
- Local'de test et: `.env.local` kullan

## Monitoring

- [Vercel Analytics](https://vercel.com/docs/analytics) aktif et
- Performance metrics'ı izle
- Deployment logs'u kontrol et

## Önemli Dosyalar

- `vercel.json` - Vercel configuration
- `.vercelignore` - Ignored files
- `package.json` - Dependencies ve scripts
- `vite.config.ts` - Build configuration

## Başlangıç Deployment Kontrol Listesi

- [ ] GitHub repo oluşturuldu
- [ ] `vercel.json` kontrolü yapıldı
- [ ] `.vercelignore` dosyası vardır
- [ ] Build komut test edildi locally
- [ ] Vercel'e project eklendi
- [ ] Environment variables set edildi
- [ ] Domain yapılandırıldı (opsiyonel)
- [ ] Production URL test edildi

## İletişim

Sorun yaşanırsa:
- Vercel Docs: https://vercel.com/docs
- React Router + Vite: https://vitejs.dev/guide/ssr.html

---

**Son Güncelleme:** 21 Nisan 2026
