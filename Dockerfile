FROM node:13.12.0-alpine as build

WORKDIR /app
RUN pwd && ls -a
COPY my-app/ ./my-app/
RUN cd my-app && npm install && npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=ui-build /usr/src/app/my-app/build/ /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

# FROM node:13.12.0-alpine as build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install --silent

# COPY . ./

# RUN npm run build

# # production environment
# FROM nginx:stable-alpine

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]