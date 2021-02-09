FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
RUN /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf"
RUN nginx -g 'daemon off;'
COPY --from=builder /usr/src/app/dist/MyLibrary/ /usr/share/nginx/html
