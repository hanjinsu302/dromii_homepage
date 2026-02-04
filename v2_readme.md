1. https 인증 
-> certbot --nginx -d www.dromii.com -d new.dromii.com 
이런식으로 2개 도메인에 대한 인증서 발급 

2. www.dromii.com 서버에 대한 https 설정 ( nginx ) 
server {
    listen       443 ssl;
    server_name  www.dromii.com new.dromii.com;

    ssl_certificate /etc/letsencrypt/live/www.dromii.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.dromii.com/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://dromii_homepage;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

# HTTP에서 HTTPS로 리다이렉션
server {
    listen      80;
    server_name www.dromii.com;
    return 301 https://$host$request_uri;
}