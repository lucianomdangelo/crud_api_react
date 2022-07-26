FROM node:14 AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:14 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/client/build ./client/build
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server/server.js ./server/
COPY server/config.js ./server/
COPY server/src/ ./server/src/

EXPOSE 80

CMD ["node", "./server/server.js"]
