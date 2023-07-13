# build stage
FROM node:lts-alpine as build-stage
RUN set -eux; apk add --no-cache curl;
RUN npm cache clean && \
    npm install -g npm@latest && \
    npm install
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY docker/nginx/default.conf /temp/default.conf
RUN envsubst /app < /temp/default.conf > /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]