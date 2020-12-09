FROM node:alpine as node
ARG MODE
ARG buildscript
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run config
RUN npm run ${buildscript}

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/angular-hw/ /usr/share/nginx/html
EXPOSE 80
EXPOSE 443