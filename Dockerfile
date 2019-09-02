# Target node version should match the version used by Atom, this ensures that
# ESLint extensions in Atom can execute these settings
FROM node:8.9.3-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "test" ]
