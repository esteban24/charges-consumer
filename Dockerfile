# FROM nginx:1.16

# COPY ./build /usr/share/nginx/html

FROM node:12-alpine as builder

RUN mkdir /app

COPY . /app

WORKDIR /app
RUN npm install
RUN	npm run build

WORKDIR /app/server
RUN npm install

FROM node:12-alpine

ENV STATIC_CONTENT /app/public

RUN mkdir /app \
	mkdir $STATIC_CONTENT

COPY --from=builder /app/build $STATIC_CONTENT
COPY --from=builder /app/server /app

WORKDIR /app

EXPOSE 5000

ENTRYPOINT ["npm", "start"]
