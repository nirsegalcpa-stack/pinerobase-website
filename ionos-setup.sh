#!/bin/bash
# PiNeroBase IONOS VPS setup — Ubuntu 22.04
# Run once as root: bash ionos-setup.sh
set -e

echo "=== PiNeroBase IONOS VPS Setup ==="
apt-get update -y && apt-get upgrade -y

# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs nginx certbot python3-certbot-nginx rsync
npm install -g pm2
pm2 startup systemd -u www-data --hp /var/www
systemctl enable nginx

# App directories
mkdir -p /var/www/pinerobase/.next/static /var/www/pinerobase/public /var/log/pm2
useradd -m -s /bin/bash deploy 2>/dev/null || true
chown -R deploy:deploy /var/www/pinerobase /var/log/pm2

# Add the GitHub Actions deploy public key
mkdir -p /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
cat >> /home/deploy/.ssh/authorized_keys << 'EOF'
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIN25K1tuybO9emrP4J8hdEfCrJB3CihHpSe4T4vnlaDe pinerobase-ionos-deploy
EOF
chmod 600 /home/deploy/.ssh/authorized_keys
chown -R deploy:deploy /home/deploy/.ssh

# Copy ecosystem config and start PM2
cat > /var/www/pinerobase/ecosystem.config.js << 'ECOEOF'
module.exports = {
  apps: [{
    name: 'pinerobase',
    script: 'server.js',
    cwd: '/var/www/pinerobase',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: { NODE_ENV: 'production', PORT: 3000, HOSTNAME: '0.0.0.0' },
    error_file: '/var/log/pm2/pinerobase-error.log',
    out_file: '/var/log/pm2/pinerobase-out.log',
    merge_logs: true,
  }],
}
ECOEOF
chown deploy:deploy /var/www/pinerobase/ecosystem.config.js

echo ""
echo "=== NGINX ==="
echo "Copy nginx.conf manually after deployment:"
echo "  cp /var/www/pinerobase/nginx.conf /etc/nginx/sites-available/pinerobase"
echo "  ln -sf /etc/nginx/sites-available/pinerobase /etc/nginx/sites-enabled/"
echo "  nginx -t && systemctl reload nginx"
echo ""
echo "=== SSL ==="
echo "  certbot --nginx -d pi-nerobase.com -d www.pi-nerobase.com -d pi-nerobase.org -d www.pi-nerobase.org -d pi-nerobase.info -d www.pi-nerobase.info"
echo ""
echo "=== Start PM2 (run as deploy user) ==="
echo "  su - deploy"
echo "  cd /var/www/pinerobase && pm2 start ecosystem.config.js && pm2 save"
echo ""
echo "Setup complete!"
