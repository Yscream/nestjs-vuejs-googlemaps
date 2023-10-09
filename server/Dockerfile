FROM node:18.17.1-alpine
WORKDIR /code
COPY ../server ./
RUN npm install
CMD ["npm", "run","start:dev"]