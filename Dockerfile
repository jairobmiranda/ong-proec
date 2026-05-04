# ── Etapa 1: build ───────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --prefer-offline

COPY . .
RUN npm run build

# ── Etapa 2: serve estático com nginx ────────────────────────────────────────
FROM nginx:stable-alpine AS runtime

COPY --from=builder /app/dist /usr/share/nginx/html

# Configuração mínima para SPA / rotas limpas
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
