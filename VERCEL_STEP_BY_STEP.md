# 🚀 VERCEL DEPLOYMENT GUIDE - Step by Step

## Your Goal
Deploy Markedia website to Vercel and connect your Hostinger domain (markedia.com)

**Total Time: 20-30 minutes**

---

## STEP 1: Create GitHub Repository

If you haven't already pushed to GitHub, do this first:

### On Your Local Machine (Terminal):

```bash
cd /Users/abdulrehman/markedia-web

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Markedia website - ready for Vercel deployment"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/markedia-web.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** You'll need a GitHub account. Create one free at https://github.com if you don't have it.

---

## STEP 2: Sign Up for Vercel

1. Go to **https://vercel.com**
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub
5. Done! You're logged into Vercel

---

## STEP 3: Deploy Your Project to Vercel

1. In Vercel dashboard, click **Add New...** → **Project**
2. Under **Import Git Repository**, you should see `markedia-web`
3. Click **Import** on the markedia-web project
4. Vercel auto-detects settings:
   - Framework: Next.js ✓ (auto-selected)
   - Root Directory: `./` ✓ (correct)
   - Leave Environment Variables blank for now
5. Click **Deploy**

**Wait 2-3 minutes** while Vercel builds and deploys...

You'll see:
```
✅ Deployment successful!
```

Your temporary URL will be something like:
```
https://markedia-web.vercel.app
```

Test it in your browser - your website should be live! 🎉

---

## STEP 4: Connect Your Hostinger Domain

Now you'll point your `markedia.com` domain from Hostinger to Vercel.

### Option A: Change Nameservers (Easiest) ⭐ RECOMMENDED

This is the simplest method:

#### In Vercel Dashboard:

1. Go to your project dashboard
2. Click **Settings** → **Domains**
3. In "Production Domain" section, click **Add Domain**
4. Type: `markedia.com`
5. Click **Add**
6. You'll see DNS records to add (don't add them yet, scroll down)
7. Click on the domain you just added
8. Look for **Nameservers** section
9. You'll see Vercel's nameservers displayed:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

#### In Hostinger hPanel:

1. Go to **https://hpanel.hostinger.com**
2. Login with your Hostinger account
3. Click **Domains** 
4. Select **markedia.com**
5. Go to **Nameservers** tab
6. Click **Change Nameservers**
7. Replace with Vercel's:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
8. Click **Save** or **Update**

#### Back in Vercel:

1. Wait for Vercel to verify the nameserver change
2. Click **Refresh** in the domain settings
3. Status will change from ⏳ to ✅ when verified

**This takes 24-48 hours** (usually faster, sometimes 10 minutes)

---

### Option B: Manual DNS Records (Advanced)

If you want to keep Hostinger nameservers:

#### In Vercel Dashboard:

1. Project → **Settings** → **Domains**
2. Add domain: `markedia.com`
3. Click the domain
4. You'll see DNS records needed:
   ```
   Type: A
   Name: @
   Value: 76.76.19.132
   ```

#### In Hostinger hPanel:

1. Domain → **markedia.com**
2. Go to **DNS Records** tab
3. Add the A record from Vercel
4. Also add CNAME:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
5. Save

#### Back in Vercel:

1. Click **Refresh** to verify
2. Status changes to ✅ when DNS propagates

---

## STEP 5: Add WWW Domain (Optional But Recommended)

To make `www.markedia.com` also work:

1. In Vercel → Domains
2. Click **Add Domain**
3. Type: `www.markedia.com`
4. Click **Add**
5. Vercel will auto-create the CNAME record

---

## STEP 6: Wait for DNS Propagation

DNS changes take time to propagate worldwide:

**Timeline:**
- 0-15 minutes: Propagating
- 15 min - 2 hours: Still propagating  
- 2-24 hours: Usually live by now
- 24-48 hours: Definitely live

**While waiting:**
- Your old website still works (if it was hosted elsewhere)
- After propagation, Vercel's version serves

---

## STEP 7: Verify Your Domain is Live

### Check 1: Open in Browser
```
https://markedia.com
```
Should show your Markedia website ✓

### Check 2: Check www
```
https://www.markedia.com
```
Should also work ✓

### Check 3: View Page Source
1. Right-click on website
2. Click **View Page Source**
3. Search for `<meta name="description"`
4. You should see your SEO meta tags ✓

### Check 4: Verify SEO Files
1. Visit: `https://markedia.com/sitemap.xml`
   - Should show XML sitemap ✓
2. Visit: `https://markedia.com/robots.txt`
   - Should show robots file ✓

---

## 🎉 Success Checklist

- [ ] GitHub repository created and pushed
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Build successful (check Deployment tab)
- [ ] Temporary URL works (vercel.app URL)
- [ ] Domain added in Vercel settings
- [ ] Nameservers changed in Hostinger
- [ ] Waiting for DNS propagation (24-48 hours)
- [ ] Domain works at markedia.com
- [ ] www.markedia.com also works
- [ ] SEO files accessible (/sitemap.xml, /robots.txt)
- [ ] Meta tags visible in page source

---

## 🔄 How to Update Your Website

Now whenever you change code, just:

```bash
git add .
git commit -m "Your change description"
git push origin main
```

Vercel automatically:
- Detects your push
- Builds your project
- Deploys to production
- Updates markedia.com

**No manual steps needed!** 🚀

---

## 🆘 Troubleshooting

### Domain shows Hostinger default page
**Cause:** DNS hasn't propagated yet
**Solution:** Wait 24-48 hours, then try again
- Or clear browser cache (Cmd+Shift+R on Mac)

### Shows "404 Domain Not Found"
**Cause:** Domain not verified in Vercel
**Solution:** 
1. Go to Vercel project → Settings → Domains
2. Click the domain
3. Check status (should show ✅ not ⏳)
4. If ⏳, click **Refresh** to check again

### Vercel shows error
**Cause:** Build failed
**Solution:**
1. Go to Vercel → Deployments
2. Click latest deployment
3. Click **Logs** tab
4. Look for error message
5. Usually it's a missing environment variable (shouldn't be for your site)

### Website shows, but looks broken
**Cause:** DNS partially propagated
**Solution:** Wait a few more hours, then refresh browser

### Can't push to GitHub
**Cause:** SSH key or credentials not set up
**Solution:**
```bash
# Set up git credentials
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Then try push again
git push origin main
```

---

## 📞 Need More Help?

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

**GitHub Help:**
- Documentation: https://docs.github.com

**Hostinger Support:**
- In hPanel → Help & Support

---

## ✨ You're Done!

Once DNS propagates (24-48 hours):

✅ Your website is live at **https://markedia.com**
✅ Auto-deploying on every git push
✅ Global CDN for fast loading
✅ Free HTTPS/SSL
✅ SEO optimized
✅ Zero maintenance

### Next Steps (Optional):

1. **Setup Google Search Console**
   - Go to https://search.google.com/search-console
   - Add your domain
   - Verify with DNS record
   - Submit sitemap: https://markedia.com/sitemap.xml

2. **Monitor Your Site**
   - Vercel Dashboard: See traffic and deployments
   - Google Search Console: Monitor rankings and traffic

3. **Update Code**
   - Make changes locally
   - `git push origin main`
   - Vercel auto-deploys
   - Live in 2-3 minutes

---

**Your Markedia website is now production-ready!** 🚀✨
