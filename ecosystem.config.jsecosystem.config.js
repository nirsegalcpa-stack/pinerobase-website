module.exports = {
  apps: [{
    name: 'pinerobase',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '/var/www/pinerobase',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: { NODE_ENV: 'production', PORT: 3000 },
    error_file: '/var/log/pm2/pinerobase-error.log',
    out_file: '/var/log/pm2/pinerobase-out.log',
    merge_logs: true,
  }],
}
