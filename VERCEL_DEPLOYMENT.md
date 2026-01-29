# 🚀 Deploy to Vercel with Hostinger Domain

This guide shows you how to deploy your Markedia website to Vercel and connect your Hostinger domain.

## ✅ Prerequisites
- GitHub account (free)
- Vercel account (free) 
- Hostinger domain: `markedia.com`
- Your project pushed to GitHub

---

## 📋 Step-by-Step Guide

### STEP 1: Push Your Project to GitHub

```bash
# Navigate to your project
cd /Users/abdulrehman/markedia-web

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Markedia website - ready for Vercel deployment"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/markedia-web.git

# Push to main branch
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

---

### STEP 2: Create Vercel Account

1. Go to **https://vercel.com**
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account
5. Done! You're logged in.

---

### STEP 3: Import Your Project to Vercel

1. In Vercel dashboard, click **Add New...** → **Project**
2. Under **Import Git Repository**, find your `markedia-web` project
3. Click **Import**
4. Configure project settings:
   - **Framework**: Next.js ✓ (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Environment Variables**: Leave blank for now
5. Click **Deploy**

**Wait 2-3 minutes** while Vercel builds your project...

✅ You'll see: **"Congratulations! Your project has been deployed."**

Your site is now live at a Vercel URL like: `markedia-web.vercel.app`

---

### STEP 4: Connect Your Hostinger Domain

#### Option A: Change DNS at Hostinger (Recommended)

1. **Log in to Hostinger hPanel**
   - Go to https://hpanel.hostinger.com
   - Select your domain: **markedia.com**

2. **Access DNS Management**
   - Click **Domains** → **markedia.com**
   - Go to **Nameservers** tab

3. **Update Nameservers**
   Replace with Vercel's nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

   *OR* scroll down and use these if above doesn't work:
   ```
   ns1.vercel.com
   ns2.vercel.com
   ```

4. **Save Changes**
   - Click Save/Update
   - DNS propagation takes 24-48 hours (usually faster)

---

#### Option B: Update DNS Records (Advanced)

If you want to keep Hostinger nameservers:

1. **In Hostinger hPanel**
   - Domain → **markedia.com**
   - Go to **DNS Records** tab

2. **Add these A records:**
   ```
   Type:  A
   Name:  @
   Value: 76.76.19.132
   ```

   And add CNAME:
   ```
   Type:  CNAME
   Name:  www
   Value: cname.vercel-dns.com
   ```

3. **In Vercel Dashboard**
   - Your project → **Settings** → **Domains**
   - Add custom domain: `markedia.com`
   - Add: `www.markedia.com`
   - Keep nameservers as Hostinger's

---

### STEP 5: Verify Domain in Vercel

1. In **Vercel Dashboard**
   - Go to your project
   - Click **Settings** → **Domains**
   - Add domain: `markedia.com`
   - Vercel will show DNS records to add

2. **Add records** (depends on your choice in Step 4):
   - If using Vercel nameservers: Nothing to do, just wait 24-48 hours
   - If using Hostinger DNS: Add the A and CNAME records shown in Vercel

3. **Click "Refresh"** to verify
   - Status changes from ⏳ to ✅ when propagated

---

### STEP 6: Test Your Website

Once DNS propagates (can take 24-48 hours):

```bash
# Test your domain
curl -I https://markedia.com

# Or just visit in browser
https://markedia.com
```

✅ You should see your Markedia website!

---

## 🔄 Auto-Deployment Setup

Now whenever you update your code:

```bash
# Make changes to your code
# Edit files in VS Code

# Commit and push
git add .
git commit -m "Update website"
git push origin main
```

**Vercel automatically:**
- ✅ Detects your push
- ✅ Builds your project
- ✅ Deploys to production
- ✅ Shows live at markedia.com

**No manual steps needed!** 🎉

---

## 📊 DNS Propagation Timeline

| Time | Status |
|------|--------|
| 0-15 min | ⏳ Propagating |
| 15 min - 2 hrs | ⏳ Propagating |
| 2-24 hrs | ⏳ Still propagating |
| 24-48 hrs | ✅ Should be live |

**While waiting**, your old site still works. After propagation, Vercel's version is live.

---

## 🔗 Important Links

| Link | Purpose |
|------|---------|
| https://vercel.com | Vercel dashboard |
| https://github.com | Your GitHub repository |
| https://hpanel.hostinger.com | Hostinger DNS settings |

---

## ✅ Verification Checklist

After deployment:

- [ ] GitHub repository created
- [ ] Project imported to Vercel
- [ ] Build successful in Vercel dashboard
- [ ] Project builds successfully (check logs)
- [ ] Domain added in Vercel settings
- [ ] DNS records updated at Hostinger
- [ ] Wait 24-48 hours for propagation
- [ ] Visit https://markedia.com
- [ ] Website loads (not Hostinger default page)
- [ ] Page source shows your SEO meta tags
- [ ] Check /sitemap.xml works
- [ ] Check /robots.txt works
- [ ] Mobile responsive (check on phone)

---

## 🆘 Troubleshooting

### Website shows "Hostinger default page"
**Solution:** DNS hasn't propagated yet
- Wait another 24 hours
- Or manually refresh your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check Vercel dashboard → Domains to see status

### Shows "Cannot find domain"
**Solution:** DNS records not added correctly
- Verify you added the right A record: `76.76.19.132`
- Or verify you're using correct Vercel nameservers
- In Vercel: Copy exact DNS records shown
- In Hostinger: Paste exactly as shown

### Shows Vercel 404 error
**Solution:** Domain not verified in Vercel yet
- Go to Vercel → Project → Settings → Domains
- Make sure domain status shows ✅ (not ⏳)
- If still ⏳, wait or click "Refresh" to check status

### Build fails on Vercel
**Solution:** Check build logs
- Vercel Dashboard → Project → Deployments
- Click latest deployment → Logs tab
- Look for errors
- Most common: Missing environment variables (usually not needed for your project)

---

## 💡 Pro Tips

### Automatic Deployments
Every push to GitHub automatically deploys:
```bash
git push origin main
# → Vercel instantly builds & deploys
```

### View Deployment Preview
Before pushing to production:
```bash
# Create a new branch
git checkout -b feature-update

# Make changes
# Commit & push
git push origin feature-update

# Vercel creates preview URL automatically
# Check it before merging to main
```

### Roll Back if Needed
In Vercel Dashboard → Deployments:
- See all deployment history
- Click any previous deployment
- Click "Promote to Production"
- Reverts to previous version instantly

### Environment Variables (if needed later)
Vercel Dashboard → Settings → Environment Variables
- Add variables there instead of .env file
- Vercel handles secrets securely

---

## 🎯 Next Steps After Deployment

1. **Verify DNS Propagation**
   - Open browser
   - Visit https://markedia.com
   - Should show your website ✅

2. **Setup Google Search Console**
   - Go to https://search.google.com/search-console
   - Add property: `markedia.com`
   - Verify with HTML record (shown in Google)
   - Add to Hostinger DNS or Vercel

3. **Submit Sitemap**
   - In Google Search Console
   - Sitemaps → Add sitemap: `https://markedia.com/sitemap.xml`
   - Google will crawl and index your pages

4. **Monitor Performance**
   - Vercel Dashboard → Analytics
   - See traffic, performance metrics
   - Google Search Console → Performance
   - Track rankings and clicks

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs
- **Hostinger Support**: https://hpanel.hostinger.com (Help & Support)

---

## ✨ That's It!

You now have:
- ✅ Website hosted on Vercel (fast, scalable)
- ✅ Domain connected from Hostinger
- ✅ Auto-deployment on every GitHub push
- ✅ Free HTTPS/SSL
- ✅ Global CDN for fast loading
- ✅ SEO fully optimized
- ✅ Zero maintenance

**Your Markedia website is now live!** 🚀

Questions? Check the troubleshooting section or contact Vercel support.
