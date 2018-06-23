# Target node version should match the version used by Atom, this ensures that
# ESLint extensions in Atom can execute these settings
FROM node:7.9-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --quiet

COPY . .