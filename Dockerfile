FROM node:14.17
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
