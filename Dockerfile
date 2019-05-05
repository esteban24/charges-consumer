FROM node:10-alpine as builder

RUN mkdir /app

COPY . /app

WORKDIR /app
RUN npm install
RUN	npm run build

WORKDIR /app/server
RUN npm install

FROM node:10-alpine

ENV REACT_APP_API_SERVER_HOST charges-server
ENV STATIC_CONTENT /app/public

RUN mkdir /app \
	mkdir $STATIC_CONTENT

COPY --from=builder /app/build $STATIC_CONTENT
COPY --from=builder /app/server /app

WORKDIR /app

EXPOSE 5000

ENTRYPOINT ["npm", "start"]
