#!/bin/bash

# Markedia Deployment Script for Hostinger
# This script helps you deploy to Hostinger Premium hosting

echo "🚀 Markedia Deployment Script"
echo "================================"

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your environment variables"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Build the project
echo "🔨 Building project..."
npm run build

# Create startup script for PM2
echo "⚙️  Setting up PM2 process manager..."

cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'markedia',
    script: './node_modules/.bin/next',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};
EOF

echo ""
echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Next steps on Hostinger:"
echo "1. Upload all files to public_html folder"
echo "2. SSH into your server"
echo "3. Run: cd ~/public_html && bash deploy.sh"
echo "4. Or manually run:"
echo "   - npm install --production"
echo "   - npm run build"
echo "   - pm2 start ecosystem.config.js"
echo "   - pm2 startup"
echo "   - pm2 save"
echo ""
echo "🔗 Your site will be available at: https://markedia.com"
