# Specifies the base image we're extending
FROM node:14

# Specify the "working directory" for the rest of the Dockerfile
WORKDIR /src

# Install packages using NPM 5 (bundled with the node:9 image)
COPY ./package.json /src/package.json
RUN npm install --silent

# Add application code
COPY ./runNightlyIntegration.js /src/runNightlyIntegration.js
COPY ./runNightlyIntegrationComplete.js /src/runNightlyIntegrationComplete.js

