FROM node:10-alpine

WORKDIR /user/app

COPY package.json package-lock.json yarn.lock ormconfig.json .env .env.development tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 3335
CMD ["yarn", "dev"]
