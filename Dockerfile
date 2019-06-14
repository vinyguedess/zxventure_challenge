FROM  node:10.16.0-alpine

WORKDIR /code

# Copy code locally
ADD src src
COPY .babelrc package.json server.js tsconfig.json yarn.lock ./

# Install dependencies and build code
RUN yarn && yarn build

CMD ["yarn", "start"]