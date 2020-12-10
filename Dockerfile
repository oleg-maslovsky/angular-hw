FROM node:alpine as node
ARG buildscript
ARG MODE
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run config
RUN npm run ${buildscript}

FROM nginx:alpine
ARG nginxconf
COPY ${nginxconf} /etc/nginx/nginx.conf
COPY --from=node /app/dist/angular-hw/ /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
