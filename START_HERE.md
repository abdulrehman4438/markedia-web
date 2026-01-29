# 🚀 START HERE - Hostinger Premium Deployment

Welcome! Your Markedia website is ready for deployment to Hostinger Premium.

## 📋 What You Have

- ✅ **Website**: Next.js 16 + React 19 + TypeScript
- ✅ **Design**: Tailwind CSS v4, responsive, light mode
- ✅ **Features**: Scroll animations, centered navigation
- ✅ **SEO**: Sitemap, robots.txt, Schema.org markup, meta tags
- ✅ **Security**: HTTPS ready, security headers configured
- ✅ **Build**: Production-ready, tested successfully

## 🎯 Choose Your Path

### 🚀 SUPER QUICK (5 minutes)
**→ Read**: `QUICK_START.md` - Copy-paste commands

### 📖 DETAILED GUIDE (30 minutes)
**→ Read**: `DEPLOYMENT.md` - Step-by-step with explanations

### ✅ VERIFICATION
**→ Use**: `CHECKLIST.sh` - Ensure everything works

### 📊 OVERVIEW
**→ See**: `HOSTINGER_SETUP.txt` - This console-friendly guide

## 🔥 The 6 Essential Steps

```bash
# 1. Enable Node.js in Hostinger hPanel
   → Advanced → Node.js → Enable (v18+)

# 2. Upload code (via Git or SFTP)
   cd ~/public_html
   git clone https://github.com/yourusername/markedia-web.git .

# 3. Install & build
   npm install --production
   npm run build
   mkdir -p logs

# 4. Create environment file
   cat > .env.local << 'EOL'
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://markedia.com
   PORT=3000
   EOL

# 5. Start with PM2
   npm install -g pm2
   pm2 start ecosystem.config.js
   pm2 startup && pm2 save

# 6. Enable reverse proxy
   → Hostinger hPanel → Advanced → Proxy
   → Target: http://localhost:3000
```

That's it! Visit `https://markedia.com` 🎉

## 📂 Key Files in Your Project

| File | Purpose |
|------|---------|
| `.htaccess` | Apache routing & security |
| `ecosystem.config.js` | PM2 process configuration |
| `.env.example` | Environment template |
| `DEPLOYMENT.md` | Full 10-step guide |
| `QUICK_START.md` | 5-minute version |
| `HOSTINGER_SETUP.txt` | This guide |

## ✨ What's Included

### Code
- Next.js 16.1.5 with TypeScript
- React 19.2.3 components
- Tailwind CSS v4 styling
- All 5 pages: Home, Services, About, About-us, FAQs

### Optimizations
- Responsive design (mobile, tablet, desktop)
- Scroll animations on service cards
- Centered navigation
- Tailwind CSS optimization

### SEO
- `sitemap.xml` - All 5 routes indexed
- `robots.txt` - Crawler directives
- Schema.org JSON-LD markup
- Meta tags on every page
- OpenGraph for social sharing
- Security headers

### Production Ready
- `.next` folder generated
- `node_modules` dependencies listed
- PM2 process manager configured
- SSL/HTTPS enabled at Hostinger
- Apache `.htaccess` configured
- Gzip compression enabled
- Static file caching configured

## 🔗 Next Steps

1. **Read ONE of these:**
   - `QUICK_START.md` (fastest)
   - `DEPLOYMENT.md` (detailed)

2. **Follow the steps** (copy-paste ready commands)

3. **Test your site** at `https://markedia.com`

4. **Setup Google Search Console**:
   - Go to https://search.google.com/search-console
   - Verify `markedia.com`
   - Submit `sitemap.xml`

5. **Monitor with PM2**:
   ```bash
   pm2 logs markedia        # View logs
   pm2 show markedia        # See status
   pm2 restart markedia     # Restart if needed
   ```

## ⚡ Quick Commands

After deployment, use these to manage your site:

```bash
# Monitor
pm2 list                 # Show all running apps
pm2 logs markedia        # View live logs
pm2 show markedia        # Full process details

# Control
pm2 restart markedia     # Restart app
pm2 stop markedia        # Stop app
pm2 start markedia       # Start app

# Update code
git pull origin main     # Get latest code
npm run build            # Rebuild
pm2 restart markedia     # Restart with new code
```

## 🆘 Troubleshooting

### Site shows error
```bash
pm2 logs markedia    # Check error messages
```

### Port 3000 in use
```bash
pm2 delete markedia  # Remove from PM2
pm2 start ecosystem.config.js  # Start again
```

### Need to rebuild
```bash
npm run build
pm2 restart markedia
```

### Check Node.js version
```bash
node --version       # Should be v18+
npm --version        # Should be v8+
```

## 📞 Support

- **Hostinger Help**: In hPanel → Help & Support
- **PM2 Docs**: https://pm2.keymetrics.io
- **Next.js Docs**: https://nextjs.org/docs

## ✅ Your Deployment Checklist

- [ ] Hostinger Node.js enabled
- [ ] Project uploaded
- [ ] Dependencies installed
- [ ] Build successful
- [ ] `.env.local` created
- [ ] PM2 started
- [ ] Reverse proxy enabled
- [ ] SSL active
- [ ] Site loads at https://markedia.com
- [ ] SEO files accessible (/sitemap.xml, /robots.txt)
- [ ] Google Search Console setup started

---

## 🎉 You're All Set!

Your website is production-ready. Follow one of the guides above and your Markedia website will be live on the internet!

**Start with `QUICK_START.md` if you want the fastest path to a live site.** 🚀

Happy deploying! ✨
