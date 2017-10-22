# marcneander.se Dockerfile

# Using python base because we need node-gyp for gemini
FROM library/python:2.7

# Install node.js
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs build-essential

# Install yarn
RUN npm install -g yarn

# TODO: Move everything above to new base image

# Copy package.json and yarn.lock
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock

# Install dependencies
RUN cd /usr/src/app/ && yarn install

# Copy over the application
COPY . /usr/src/app/

# Set a working directory
WORKDIR /usr/src/app
