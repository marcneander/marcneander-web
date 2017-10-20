FROM node:8.7-alpine

# Copy package.json and yarn.lock
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock

# Install dependencies
RUN cd /usr/src/app/ && yarn install

# Copy over the application
COPY . /usr/src/app/

# Set a working directory
WORKDIR /usr/src/app
