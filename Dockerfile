# Etapa 1: builder, solo producción
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

# Etapa 2: imagen final ligera
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3027

CMD ["node", "src/app.js"]
