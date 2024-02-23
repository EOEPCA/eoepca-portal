### STAGE 1: Build ###
FROM node:21-alpine3.18 as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i -g @angular/cli
    
# Install app dependencies:
RUN npm i
    
COPY . .
RUN ng build

### STAGE 2: Run ###
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/* /usr/share/nginx/html
WORKDIR /start
COPY ./start.sh .
CMD [ "sh", "start.sh" ]