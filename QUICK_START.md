# 🚀 QUICK START: Deploy to Hostinger Premium

## In 5 Minutes:

### 1. Enable Node.js
- Hostinger hPanel → Advanced → Node.js → Enable (v18+)

### 2. Upload Files (Choose One)
```bash
# Option A: Git Clone
git clone https://github.com/yourusername/markedia-web.git ~/public_html

# Option B: Upload via SFTP
# Drag and drop all files to public_html folder
```

### 3. SSH Into Server
```bash
ssh username@markedia.com
cd ~/public_html
```

### 4. Install & Build (Copy-Paste)
```bash
npm install --production
npm run build
mkdir -p logs
```

### 5. Create Environment File
```bash
cat > .env.local << 'EOF'
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://markedia.com
PORT=3000
EOF
```

### 6. Start with PM2 (Copy-Paste)
```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 startup
# Copy and run the output command
pm2 save
```

### 7. Enable Reverse Proxy
- Hostinger hPanel → Advanced → Proxy
- Target: `http://localhost:3000`
- Path: `/`

### 8. Test
- Open: https://markedia.com
- Should show your website ✅

---

## 📝 Key Files Created:

| File | Purpose |
|------|---------|
| `.htaccess` | Apache configuration for routing |
| `.env.example` | Environment variables template |
| `ecosystem.config.js` | PM2 process configuration |
| `deploy.sh` | Automated deployment script |
| `DEPLOYMENT.md` | Full deployment guide |

---

## ✅ Verify Installation:

```bash
# Check PM2 status
pm2 list

# View logs
pm2 logs markedia

# Restart if needed
pm2 restart markedia
```

---

## 🔍 Check SEO Setup:

Visit these URLs to verify:
- https://markedia.com/sitemap.xml
- https://markedia.com/robots.txt

View page source and check for meta tags (name="description", etc.)

---

## 💡 Pro Tips:

- Keep PM2 running: `pm2 save && pm2 startup`
- Update code: `git pull origin main && npm run build && pm2 restart markedia`
- Monitor: `pm2 logs markedia` (Ctrl+C to exit)
- SSL is auto-enabled by Hostinger (green lock) ✅

---

**That's it! You're now live at https://markedia.com** 🎉
