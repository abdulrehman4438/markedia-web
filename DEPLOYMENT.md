# 🚀 Markedia Deployment Guide - Hostinger Premium

This guide will help you deploy your Next.js website to Hostinger Premium hosting.

## ✅ Prerequisites
- Hostinger Premium account with Node.js support enabled
- SSH access to your server
- Your domain connected to Hostinger (markedia.com)
- Git installed (optional but recommended)

---

## 📋 Step-by-Step Deployment

### Step 1: Enable Node.js on Hostinger

1. Log in to **Hostinger hPanel**
2. Go to **Hosting** → Select your domain
3. Navigate to **Advanced** → **Node.js**
4. Click **Enable Node.js**
5. Select Node.js version **18.x or higher**
6. Take note of the port number (usually 3000)

### Step 2: Prepare for Deployment

#### Option A: Using Git (Recommended)
```bash
# On your local machine
cd /Users/abdulrehman/markedia-web

# Initialize git if not already done
git init
git add .
git commit -m "Initial deployment"

# Push to GitHub/GitLab
git remote add origin https://github.com/yourusername/markedia-web.git
git branch -M main
git push -u origin main
```

#### Option B: Using SFTP
Upload all files in the project folder to Hostinger's `public_html`

### Step 3: Connect via SSH

```bash
# Open Terminal/PowerShell
ssh username@your.hostinger.ip
# Or use your domain if available
ssh username@markedia.com

# Enter your password
```

### Step 4: Deploy the Application

```bash
# Navigate to project directory
cd ~/public_html

# Option A: If using Git
git clone https://github.com/yourusername/markedia-web.git .
cd ~/public_html

# Option B: If already uploaded via SFTP
# Skip the clone step and go directly to:
cd ~/public_html
```

### Step 5: Install Dependencies & Build

```bash
# Install production dependencies only
npm install --production

# Build the application
npm run build

# Create logs directory
mkdir -p logs
```

### Step 6: Setup Environment Variables

```bash
# Create .env.local file
nano .env.local
```

Add the following:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://markedia.com
PORT=3000
```

Save with `Ctrl+O`, Enter, `Ctrl+X`

### Step 7: Install PM2 (Process Manager)

```bash
# Install PM2 globally
npm install -g pm2

# Start your application
pm2 start ecosystem.config.js

# Make PM2 start on server reboot
pm2 startup
# Copy and run the output command

# Save PM2 configuration
pm2 save
```

### Step 8: Configure Hostinger Proxy

1. In **Hostinger hPanel** → **Advanced** → **Proxy**
2. Enable **Reverse Proxy**
3. Set:
   - **Target URL**: `http://localhost:3000`
   - **Path**: `/`

### Step 9: Verify SSL Certificate

1. Go to **Hostinger hPanel** → **Security** → **SSL/TLS**
2. Should show **Active** (free AutoSSL)
3. If not, click **Install** to generate automatic certificate

### Step 10: Connect Your Domain

1. In **Hostinger hPanel** → **Domains** → Your domain
2. Verify DNS records point to your server:
   - A record: Your server IP
   - CNAME (www): Points to main domain
3. Wait 24-48 hours for DNS propagation

---

## 🔍 Verification & Testing

### Check Application Status
```bash
# View running applications
pm2 list

# View logs
pm2 logs markedia

# Show details
pm2 show markedia
```

### Test Your Website
- Open browser: `https://markedia.com`
- Should display your website
- SEO tags should be present (View Page Source)
- sitemap.xml accessible at `https://markedia.com/sitemap.xml`
- robots.txt accessible at `https://markedia.com/robots.txt`

### Common Issues & Solutions

**Issue: Port already in use**
```bash
lsof -i :3000
kill -9 <PID>
pm2 restart markedia
```

**Issue: Application crashes**
```bash
pm2 logs markedia
# Check error logs for details
```

**Issue: Domain shows error**
- Wait for DNS propagation (up to 48 hours)
- Check Hostinger nameservers are correct
- Verify reverse proxy is enabled

---

## 📊 Monitoring & Maintenance

### Restart Application
```bash
pm2 restart markedia
```

### Stop Application
```bash
pm2 stop markedia
```

### View Real-time Logs
```bash
pm2 logs markedia
```

### Update Code (After Git Push)
```bash
cd ~/public_html
git pull origin main
npm install --production
npm run build
pm2 restart markedia
```

---

## 🔒 Security Best Practices

✅ Enable HTTPS (auto-enabled by Hostinger)
✅ Use strong SSH password or key authentication
✅ Keep Node.js updated
✅ Regular backups in Hostinger panel
✅ Monitor PM2 logs for errors
✅ Use environment variables for sensitive data

---

## 📞 Support

- **Hostinger Support**: In hPanel → Help & Support
- **Next.js Docs**: https://nextjs.org/docs
- **PM2 Docs**: https://pm2.keymetrics.io/docs

---

## ✨ You're Done!

Your Markedia website is now live on `https://markedia.com`

Monitor it regularly:
- Check logs: `pm2 logs markedia`
- Verify uptime: `pm2 show markedia`
- Monitor Google Search Console for indexing
