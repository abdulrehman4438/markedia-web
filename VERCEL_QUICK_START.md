# 🚀 QUICK VERCEL DEPLOYMENT (10 Minutes)

## The Fastest Way to Get Live

### STEP 1: Push to GitHub (2 min)

```bash
cd /Users/abdulrehman/markedia-web

git add .
git commit -m "Markedia website ready"
git push origin main
```

> **First time?** Create repo on GitHub.com first, then:
> ```bash
> git remote add origin https://github.com/YOUR_USERNAME/markedia-web.git
> git branch -M main
> git push -u origin main
> ```

---

### STEP 2: Deploy on Vercel (2 min)

1. Go to **https://vercel.com**
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Select `markedia-web` repo
5. Click **Import**
6. Click **Deploy** (settings auto-detected)

✅ **Your site is LIVE!**

URL: `markedia-web.vercel.app`

---

### STEP 3: Connect Your Domain (3 min)

#### Option A: Quick DNS Update (Easiest)

1. **Hostinger hPanel** → Your domain
2. Go to **Nameservers** tab
3. Change to Vercel nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. Save

That's it! Wait 24-48 hours for DNS to propagate.

#### Option B: Manual DNS Records

1. **Hostinger** → Domain DNS Records
2. Add A record:
   ```
   Type: A
   Name: @
   Value: 76.76.19.132
   ```
3. Add CNAME:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

### STEP 4: Verify in Vercel (1 min)

1. **Vercel Dashboard** → Your project
2. **Settings** → **Domains**
3. Add domain: `markedia.com`
4. Add domain: `www.markedia.com`
5. Wait for status to show ✅

---

### ✅ Done!

Your site is now live at **https://markedia.com**

Updates automatically when you push code to GitHub! 🎉

---

## 🔄 Update Your Site

Every time you change code:

```bash
git add .
git commit -m "Your message"
git push origin main

# → Vercel builds & deploys automatically
# → Live in 2-3 minutes
```

No manual deployment steps! 🚀

---

## 📞 Having Issues?

**Domain shows old page?**
- DNS not propagated yet (wait 24-48 hours)
- Or clear browser cache (Cmd+Shift+R on Mac)

**Vercel shows error?**
- Check Vercel Dashboard → Deployments
- Click latest → Logs tab
- Look for error message

**Need help?**
- Read: `VERCEL_DEPLOYMENT.md` (full guide)
- Vercel Docs: https://vercel.com/docs
