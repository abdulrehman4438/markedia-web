#!/bin/bash
# Quick Deployment Checklist for Hostinger Premium

echo "🚀 Markedia Hostinger Premium Deployment Checklist"
echo "=================================================="
echo ""

checklist=(
    "[ ] Node.js enabled in Hostinger hPanel (Advanced → Node.js)"
    "[ ] SSH access credentials ready"
    "[ ] Project uploaded to ~/public_html or repository cloned"
    "[ ] npm install --production completed"
    "[ ] npm run build completed successfully"
    "[ ] .env.local file created with NEXT_PUBLIC_SITE_URL=https://markedia.com"
    "[ ] Logs directory created (mkdir -p logs)"
    "[ ] PM2 installed globally (npm install -g pm2)"
    "[ ] ecosystem.config.js in place"
    "[ ] pm2 start ecosystem.config.js executed"
    "[ ] pm2 startup configured"
    "[ ] pm2 save executed"
    "[ ] Reverse proxy enabled in Hostinger (Target: http://localhost:3000)"
    "[ ] SSL certificate active (green lock icon)"
    "[ ] Domain DNS records pointing to server"
    "[ ] Website accessible at https://markedia.com"
    "[ ] SEO files verified:"
    "    [ ] sitemap.xml accessible at /sitemap.xml"
    "    [ ] robots.txt accessible at /robots.txt"
    "    [ ] Meta tags visible in page source"
    "[ ] Google Search Console setup started"
)

for item in "${checklist[@]}"; do
    echo "$item"
done

echo ""
echo "📝 Useful Commands:"
echo "=================="
echo "pm2 list              - Show all running processes"
echo "pm2 logs markedia     - View application logs"
echo "pm2 restart markedia  - Restart application"
echo "pm2 stop markedia     - Stop application"
echo "pm2 delete markedia   - Remove from PM2"
echo "npm run build         - Rebuild application"
echo ""
echo "✅ When all boxes are checked, your site is live!"
