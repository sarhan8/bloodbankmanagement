FROM node:16
WORKDIR /app
COPY ./backend .
RUN yarn install 
EXPOSE 5000
CMD ["node", "server.js"]