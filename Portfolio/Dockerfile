FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npx expo export --output-dir dist

FROM node:18-alpine AS serve

RUN npm install -g serve

COPY --from=build /app/dist /app/dist

COPY serve.json /app/dist/serve.json

EXPOSE 9022

CMD ["serve", "-s", "/app/dist", "-l", "9022"]
