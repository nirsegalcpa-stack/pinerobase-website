#!/bin/bash
# PiNeroBase IONOS VPS setup — Ubuntu 22.04. Run once as root.
set -e
apt-get update -y && apt-get upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs nginx certbot python3-certbot-nginx
npm install -g pm2
pm2 startup systemd -u www-data --hp /var/www
systemctl enable nginx
mkdir -p /var/www/pinerobase /var/log/pm2
useradd -m -s /bin/bash deploy 2>/dev/null || true
chown -R deploy:deploy /var/www/pinerobase /var/log/pm2
echo ""
echo "=== NEXT: run as deploy user ==="
echo "git clone git@github.com:nirsegalcpa-stack/pinerobase-website.git /var/www/pinerobase"
echo "cd /var/www/pinerobase && npm ci && npm run build"
echo "pm2 start ecosystem.config.js && pm2 save"
echo ""
echo "=== NGINX + SSL ==="
echo "cp nginx.conf /etc/nginx/sites-available/pinerobase"
echo "ln -s /etc/nginx/sites-available/pinerobase /etc/nginx/sites-enabled/"
echo "nginx -t && systemctl reload nginx"
echo "certbot --nginx -d pi-nerobase.com -d www.pi-nerobase.com -d pi-nerobase.org -d www.pi-nerobase.org -d pi-nerobase.info -d www.pi-nerobase.info"
